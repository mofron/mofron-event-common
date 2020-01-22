/**
 * @file mofron-event-common/index.js
 * @brief common event for mofron
 *        set addEventListener of target object
 *        it is possible to use addEventListener() for general by setting the parameter of the type method.
 * ## event function parameter
 *  - component: event target component object
 *  - mofron-event-common: event instance
 *  - mixed: user specified parameter
 * @feature it is possible to get event object of addEventListener by 'eventObject' method.
 * @license MIT
 */
module.exports = class extends mofron.class.Event {
    /**
     * initialize common event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @short listener,type
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("Common");
	    this.shortForm("listener", "type");
            
            /* init config */
            this.confmng().add("type", { type: "string" });
            this.confmng().add("eventObject", { type: "object" });
            
	    /* set config */
            if (undefined !== prm) {
                this.config(prm);
            }
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
                (e) => {
                    try {
		        evt_obj.eventObject(e);
		        evt_obj.execListener(evt_obj);
			evt_obj.confmng().delete("eventObject");
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
    
    /**
     * event object setter/getter
     * 
     * @param (object) event object by addEventListener
     *                 undefined: execute as getter
     * @return (object) event object by addEventListener
     * @type function
     */
    eventObject (prm) {
        try {
	    return this.confmng("eventObject", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
