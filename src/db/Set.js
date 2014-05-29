/*#ifndef(UMD)*/
(function () { /* Begin of privacy scope */
    "use strict";
/*#endif*/

    gpf.define("pkml.db.Set", "gpf.interfaces.Interface", {

        public: {

            /**
             * Returns unique identifier of the set
             *
             * @return {String}
             */
            uid: function () {
                return "";
            },

            /**
             * Returns the translated collection name
             *
             * @param {String} lg Language code
             * @return {string}
             */
            collection: function (lg) {
                return "";
            },

            /**
             * Returns the translated set name
             *
             * @param {String} lg Language code
             * @return {string}
             */
            name: function (lg) {
                return "";
            },

            /**
             * Load the cards associated to this set
             *
             * @param {Object} options (reserved for future usage)
             * @return {gpf.events.Broadcaster}
             *
             * @event loaded The cards are loaded
             *
             * @event error An error occurred while loading
             *
             */
            load: function (options) {
            },

            /**
             * Number of cards in this set
             *
             * @return {Number}
             * 0 if the set is not yet loaded
             */
            count: function () {
                return 0;
            },

            /**
             * Card accessor
             *
             * @param {Number} idx
             * @return {pkml.db.Card}
             */
            get: function (idx) {
                return null;
            }

        }

    });

/*#ifndef(UMD)*/
}()); /* End of privacy scope */
/*#endif*/
