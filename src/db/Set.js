/*#ifndef(UMD)*/
(function () { /* Begin of privacy scope */
    "use strict";
/*#endif*/

    gpf.define("pkml.db.Set", "gpf.interfaces.Interface", {

        public: {

            /**
             * Returns unique identifier of the set
             *
             * @returns {String}
             */
            uid: function () {
                return "";
            },

            /**
             * Returns the translated Set name
             *
             * @param {String} lg Language code
             * @returns {string}
             */
            name: function (lg) {
                return "";
            },

            /**
             * Number of cards in this set
             *
             * @returns {Number}
             */
            count: function () {
                return 0;
            },

            /**
             * Card accessor
             *
             * @param {Number} idx
             * @returns {pkml.db.Card}
             */
            get: function (idx) {
                return null;
            }

        }

    });

/*#ifndef(UMD)*/
}()); /* End of privacy scope */
/*#endif*/
