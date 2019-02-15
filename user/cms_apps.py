from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool

@apphook_pool.register
class MySecondApphook(CMSApp):
    app_name = 'user'  # must match the application namespace
    name = "user"

    def get_urls(self, page=None, language=None, **kwargs):
        return ["user.urls"] # replace this with the path to your application's URLs module
