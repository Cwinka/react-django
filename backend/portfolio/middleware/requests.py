from django.conf import settings
from threading import Thread, Timer
from django.http.response import HttpResponseForbidden
from collections import defaultdict


class RestrictRequestsPerDayMiddleware():
    """ Restricts a number of requests from an individual client per day
        :CAN_MAKE_REQ_IN [int] - number of waiting seconds if overflow requests from a client
        :MAX_REQUEST [int] - number of requests a client can make in a row
        NOT ACTUAL PER DAY !!!!
    """
    CAN_MAKE_REQ_IN = 5
    MAX_REQUEST =  20
    ALLOWED_HOSTS = settings.ALLOWED_HOSTS
    
    def __init__(self, get_response):
        self.get_settings()
        self.same_req = defaultdict(int)
        self.thread_queue = []
        self.running = [] 
        self.get_response = get_response
        
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        
        status = self.procss_request(request)
        if status == 200:
            response = self.get_response(request)
            # Code to be executed for each request/response after
            # the view is called.
            return response
        else:
            return HttpResponseForbidden()
    
    def procss_request(self, request):
        """ Increments a number of requests from a client
            checks MAX_REQUEST limit if overflow,
            forbids next requests from a client
            on CAN_MAKE_REQ_IN seconds
        """
        x_forwarded_for = request.get_host()
        
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')

        if ip.split(':')[0] in self.ALLOWED_HOSTS: # allowed host with no port
            return 200
        self.inc(ip)
        if self.is_overflow(ip): # max requests
            if not self.thread_exists(ip): # not in timed thread
                # make new thread and put in queue
                self.put_thread(ip, 
                            Timer(
                                interval=self.CAN_MAKE_REQ_IN, # when new requests is allowed
                                function=self.clear,
                                args=[ip]))
            return 403
        return 200
    def get_settings(self):
        """ Updetes default settings if in a main settings needed variabels are present """
        try:
            self.CAN_MAKE_REQ_IN = settings.CAN_MAKE_REQ_IN
        except AttributeError:
            pass
        try:
            self.MAX_REQUEST = settings.MAX_REQUEST
        except AttributeError:
            pass

    def inc(self, ip: str):
        """ Increments a number of done requests """
        self.same_req[ip] += 1
    
    def clear(self, ip: str):
        """ Clears a number of requests on client ip"""
        try:
            del self.same_req[ip]
        except KeyError:
            # already deleted
            pass
        finally:
            rn = self.running.index(ip)
            self.running.pop(rn)
    
    def is_overflow(self, ip: str):
        return self.same_req[ip] > self.MAX_REQUEST

    def watch(self):
        """ Activates all the threads async """
        while self.thread_queue:
            item = self.thread_queue.pop()
            tr = item[1]
            tr.start()
            self.running.append(item[0]) # adds a client ip to the running arr as a pointer
    
    def put_thread(self, ip: str, tr:Thread):
        self.thread_queue.append((ip, tr))
        self.watch()

    def thread_exists(self, ip: str):
        """ Checks if a thread is already present in the thread queue or in the running list """
        for item in self.thread_queue:
            if ip == item[0]:
                return True
        return ip in self.running