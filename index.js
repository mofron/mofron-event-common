/**
 * @file common.js
 * @author simpart
 */

/**
 * @class event.Common
 * @brief common event class
 */
mofron.event.Common = class extends mofron.Event {
    
    constructor (fnc, prm) {
        try {
            super(fnc,prm);
            this.name('Common');
            this.evt_name = null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    eventName (nm) {
        try {
            if (undefined === nm) {
                return this.evt_name;
            }
            if ('string' !== (typeof nm)) {
                throw new Error('invalid parameter');
            }
            this.evt_name = nm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    eventConts () {
        try {
            var cbf = this.func;
            var cbp = this.parm;
            
            if ((null      === this.evt_name) ||
                (undefined === this.target.getRawDom()[this.evt_name])) {
                throw new Error('invalid event name');
            }
            this.target.getRawDom()[this.evt_name] = function () {
                try {
                    if (null != cbf) {
                        cbf(cbp);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
