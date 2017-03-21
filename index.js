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
            if ('function' === typeof fnc) {
                super(fnc,prm);
            } else {
                super();
            }
            this.name('Common');
            this.evt_name = null;
            
            this.prmOpt(('function' === typeof fnc) ? null : fnc);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    eventName (nm) {
        try {
            if (undefined === nm) {
                /* getter */
                return this.evt_name;
            }
            /* setter */
            if ('string' !== (typeof nm)) {
                throw new Error('invalid parameter');
            }
            this.evt_name = nm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    eventConts (tgt_dom) {
        try {
            if ((null      === this.eventName()) ||
                (undefined === tgt_dom.getRawDom()[this.eventName()])) {
                throw new Error('invalid event name');
            }
            
            var evt_func = this.handler();
            tgt_dom.getRawDom()[this.eventName()] = function () {
                try {
                    if (null != evt_func[0]) {
                        evt_func[0](evt_func[1]);
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
