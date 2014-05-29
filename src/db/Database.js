/*#ifndef(UMD)*/
(function () { /* Begin of privacy scope */
    "use strict";
/*#endif*/

    gpf.define("pkml.db.Database", "gpf.interfaces.Interface", {

        public: {

            /**
             * Initialize the card database
             *
             * @param {Object} options (reserved for future usage)
             * @return {gpf.events.Broadcaster}
             *
             * @event initialized The database is ready to be used
             *
             * @event error An error occurred while loading
             *
             */
            initialize: function (options) {
            },

            /**
             * Number of sets in the database
             *
             * @return {Number}
             */
            count: function () {
                return 0;
            },

            /**
             * Set accessor
             *
             * @param {Number} idx
             * @return {pkml.db.Set}
             */
            get: function (idx) {
                return null;
            }

        }

    });

/*#ifndef(UMD)*/
}()); /* End of privacy scope */
/*#endif*/
