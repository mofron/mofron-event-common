/**
 * @file common.js
 * @author simpart
 */

/**
 * @class event.Common
 * @brief common event class
 */
mofron.event.Common = class extends mofron.Event {
    
    constructor (po, p2, p3) {
        try {
            super();
            
            this.name('Common');
            this.prmOpt(po, p2, p3);
            
            if (undefined !== p3) {
                this.eventName(p3);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    eventName (nm) {
        try {
            if (undefined === nm) {
                return this.m_evtname;
            }
            if ('string' !== (typeof nm)) {
                throw new Error('invalid parameter');
            }
            this.m_evtname = nm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            var evt_func = this.handler();
            if ((null      === this.eventName()) ||
                (undefined === tgt_dom.getRawDom()[this.eventName()])) {
                throw new Error('invalid event name : ' + this.eventName());
            }
            tgt_dom.getRawDom()[this.eventName()] = () => {
                try {
                    evt_func[0](evt_func[1]);
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
module.exports = mofron.event.Common;
/* end of file */
