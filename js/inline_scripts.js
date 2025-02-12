
  // fix for Safari's back/forward cache
  window.onpageshow = function(e) {
    if (e.persisted) { window.location.reload(); }
  };


var __config__ = {"page_id":"p5782f14138e60ef1c45c2b44bd003ce5bf5e6a50163b557f02d5d","theme":{"name":"marta\/ludwig"},"pageTransition":true,"linkTransition":true,"disableDownload":false,"localizedValidationMessages":{"required":"This field is required","Email":"This field must be a valid email address"},"lightbox":{"enabled":false},"cookie_banner":{"enabled":false}};