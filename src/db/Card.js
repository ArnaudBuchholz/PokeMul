/*#ifndef(UMD)*/
(function () { /* Begin of privacy scope */
    "use strict";
/*#endif*/

    gpf.define("pkml.db.Card", "gpf.interfaces.Interface", {

        public: {

            /**
             * Returns unique identifier of the card
             * (Composed of Set Identifier concatenated with . and card#)
             *
             * @returns {String}
             */
            uid: function () {
                return "";
            },

            /**
             * Returns the translated Card name
             *
             * @param {String} lg Language code
             * @returns {string}
             */
            name: function (lg) {
                return "";
            },

            /**
             * Returns initial card kind
             *
             * @returns {Number}
             */
            kind: function () {
                return pkml.db.Card.KIND.NONE;
            },

            /**
             * In some situations, a card might have an alternate kind
             * (for instance, Unown Q)
             *
             * @returns {Number}
             */
            alternateKind: function () {
                return pkml.db.Card.KIND.NONE;
            },

            /**
             * Element type
             *
             * @returns {Number}
             */
            type: function () {
                return pkml.db.Card.TYPE.NEUTRAL;
            }

        },

        static: {

            /**
             * Card kind enumeration
             *
             * @type {Number}
             */
            KIND: {
                NONE:      -1, // Used for kind2 default
                ENERGY:     0,
                BASE:       1,
                LEVEL1:     2,
                LEVEL2:     3,
                LEVELX:     4,
                SUPPORTER:  5,
                TRAINER:    6,
                TOOL:       7,
                STADIUM:    8,
                ENERGYSP:   9,
                FOSSIL:     10,
                SP:         11,
                SPX:        12,
                LEGEND:     13, // First card as HP, the other has description
                EX:         14  // When down, you win 2 cards
            },

            /**
             * Element type enumeration
             *
             * @type {Number}
             */
            TYPE: {
                NEUTRAL: 0,
                METAL: 1,
                GRASS: 2,
                WATER: 3,
                PSYCHIC: 4,
                DARKNESS: 5,
                LIGHTNING: 6,
                FIRE: 7,
                FIGHTING: 8
            }

        }

    });

/*#ifndef(UMD)*/
}()); /* End of privacy scope */
/*#endif*/
