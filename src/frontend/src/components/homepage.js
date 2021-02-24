import React, { useEffect } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import githubFill from '@iconify/icons-akar-icons/github-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import vkFill from '@iconify/icons-akar-icons/vk-fill';
import telegramIcon from '@iconify/icons-bi/telegram';
import { connect, useDispatch } from 'react-redux';
import { fetcRecenthWorks } from 'redux/actions';
import WorkPreView from './workPreview';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    const dispatch = useDispatch();
    const works = props.works;
    useEffect(()=> {
        dispatch(fetcRecenthWorks());
    }, [])
    return(
        <div className='home'>
            <div className="intro">
                <div className="my-card">
                    <div className="my-card__image-box">
                        <div className="my-card__image">

                        </div>
                    </div>
                    <div className="my-card__info">
                        <h1 className="my-card__name">Никита Тон</h1>
                        <div className="my-card__who-am-i">
                            Студент Программист Аналитик данных
                            <span className="my-card__who-am-i--warning"></span>
                        </div>
                        <div className="my-card__social"> 
                            <div className="social-icon my-card__social-icon git">
                                <Icon icon={githubFill} style={{color: '#ffff', fontSize: '32px'}} />
                            </div>
                            <div className="social-icon my-card__social-icon insta">
                                <Icon icon={instagramFill} style={{color: '#ffff', fontSize: '32px'}} />
                            </div>
                            <div className="social-icon my-card__social-icon vk">
                                <Icon icon={vkFill} style={{color: '#ffff', fontSize: '32px'}} />
                            </div>
                            <div className="social-icon my-card__social-icon tele">
                                <Icon icon={telegramIcon} style={{color: '#ffff', fontSize: '32px'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <h2 className="about__title">Немного обо мне</h2>
                <p>Занимаюсь разработкой программного обеспечения, в основном без пользовательского интерфейса (использование из команной строки), для windows и linux подобных систем,
                    веб-программированием с использованием инструментов React, Python и фреймворка для REST API (django, flask, fastapi), созданием ботов телеграмм, инстарамм, вк
                </p>
            </div>
            <div className="what-can-i-do">
                <div className="abilities">
                    <h2 className="abilities__title">Где я могу быть полезен для Вас</h2>
                    <div className="abilities__content">
                        <div className="abilitie abilities__abilitie">
                            <h3 className="abilitie__name">Автоматический сбор и анализ данных</h3>
                            <p className="abilitie__description">Парсинг сайтов, получение информации с бразы данных, обработка и отправка результатов</p>
                        </div>
                        <div className="abilitie abilitie--right abilities__abilitie">
                            <h3 className="abilitie__name">Верстка сайта по макету</h3>
                            <p className="abilitie__description">Figma, Tilda, JPG, PNG</p>
                        </div>
                        <div className="abilitie abilities__abilitie">
                            <h3 className="abilitie__name">Создание и настройка ботов</h3>
                            <p className="abilitie__description">Инстаграмм, вконтакте, телеграм</p>
                        </div>
                        <div className="abilitie abilitie--right abilities__abilitie">
                            <h3 className="abilitie__name">Прикладное программное обеспечение</h3>
                            <p className="abilitie__description">Написание скритов без интерфейса для Windows, Linux, MAC OS систем</p>
                        </div>
                        <div className="abilitie abilities__abilitie">
                            <h3 className="abilitie__name">Веб-программирование</h3>
                            <p className="abilitie__description">Программирование на React, правки CSS/JS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recent-works">
                <h3 className="recent-works__title">Мои недавние работы</h3>
                <div className="recent-works__content">
                    <div className="recent-works__list">
                        {works &&
                            works.map(work => (
                                <WorkPreView
                                    key={work.id}
                                    addClass={'recent-works__list--preview'}
                                    work={work}
                                    skillsNoClicable={true}
                                    skillsNoHoverable={true}
                                    image={work.image}/>
                            ))
                        }
                    </div>
                    <Link className="recent-works__see-more" to={`/portfolio`}>Смотерть все</Link>
                </div>
            </div>
            <div className="footer">
                <div>@Nikita_Ton 2021</div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    works: state.works.recent,
})

export default connect(mapStateToProps)(HomePage);