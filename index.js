/**
 * @file mofron-event-common/index.js
 * @brief common event for mofron
 *        set 'addEventListener' to target dom
 * @license MIT
 */
module.exports = class extends mofron.class.Event {
    /**
     * initialize common event
     * 
     * @param (mixed) handler parameter
     *                key-value: event config
     * @param (string) type parameter
     * @short handler,type
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            
            /* init config */
            this.confmng().add("type", { type: "string" });
            
	    this.name("Common");
            this.shortForm("handler", "type");
            
	    /* set config */
            if (0 < arguments.length) {
                this.config(p1,p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event type
     * 
     * @param (string) event type (addEventListener parameter)
     * @return (string) event type
     * @type parameter
     */
    type (prm) {
        try {
	    return this.confmng("type", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents
     * 
     * @param (mofron.class.Dom) event target dom
     * @type private
     */
    contents (tgt_dom) {
        try {
            let evt_obj = this;
            tgt_dom.getRawDom().addEventListener(
                this.type(),
                () => {
                    try {
		        evt_obj.execHandler(evt_obj);
                    } catch (e) {
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
/* end of file */
