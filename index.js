/**
 * @file mofron-event-common/index.js
 * @brief common event for mofron
 *        set 'addEventListener' to target dom
 * @author simpart
 */
const mf = require('mofron');

mf.event.Common = class extends mf.Event {
    
    /**
     * initialize common event
     * 
     * @param (function/array) function: event function
     *                         array: [event func, event param]
     * @param (string) 'type' parameter
     * @pmap handler,type
     * @type private
     */
    constructor (po, p2) {
        try {
            super();
            this.name("Common");
            this.prmMap(["handler", "type"]);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event type
     * 
     * @param (string) event type
     * @return (string) event type
     * @type parameter
     */
    type (prm) {
        try { return this.member("type", "string", prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents
     *
     * @param (object) dom object
     * @type private
     */
    contents (tgt_dom) {
        try {
            let evt_obj = this;
            tgt_dom.getRawDom().addEventListener(
                this.type(),
                () => {
                    try { evt_obj.execHandler(evt_obj); } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.Common;
/* end of file */
