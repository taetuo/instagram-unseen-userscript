// ==UserScript==
// @name         instagram-unseen
// @namespace    https://github.com/taetuo
// @homepageURL  https://github.com/taetuo/instagram-unseen-userscript
// @supportURL   https://github.com/taetuo/instagram-unseen-userscript/issues
// @downloadURL  https://github.com/taetuo/instagram-unseen-userscript/raw/main/instagram-unseen.user.js
// @version      0.1.0
// @description  Become a terrible friend—keep their messages unseen.
// @author       TaeTuo
// @license      AGPL-3.0-or-later
// @match        https://*.instagram.com/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    const oldSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(body) {
        // useIGDMarkThreadAsReadMutation
        // useIGDMarkThreadAsReadValidationMutation
        if (typeof body === 'string' && body.includes('useIGDMarkThreadAsRead')) return;
        return oldSend.call(this, body);
    };
})();
