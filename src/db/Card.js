/*#ifndef(UMD)*/
(function () { /* Begin of privacy scope */
    "use strict";
/*#endif*/

    gpf.define("pkml.db.Card", "gpf.interfaces.Interface", {

        public: {

            /**
             * Returns unique identifier of the card
             * (Composed of Set identifier concatenated with . and card#)
             *
             * @return {String}
             */
            uid: function () {
                return "";
            },

            /**
             * Returns the translated card name
             *
             * @param {String} lg Language code
             * @return {string}
             */
            name: function (lg) {
                return "";
            },

            /**
             * Returns initial card kind
             *
             * @return {pkml.db.Card.KIND}
             */
            kind: function () {
                return pkml.db.Card.KIND.NONE;
            },

            /**
             * In some situations, a card might have an alternate kind
             * (for instance, Unown Q which is also a tool)
             *
             * @return {pkml.db.Card.KIND}
             */
            alternateKind: function () {
                return pkml.db.Card.KIND.NONE;
            },

            /**
             * Element type
             *
             * @return {pkml.db.Card.TYPE}
             */
            type: function () {
                return pkml.db.Card.TYPE.NEUTRAL;
            },

            //region Creature specific

            /**
             * Pokemon species
             *
             * @return {Number}
             */
            species: function () {
                return 0;
            },

            /**
             * Pokemon level
             *
             * @return {number}
             */
            level: function () {
                return 0;
            },

            /**
             * Pokemon health point
             *
             * @return {number}
             */
            hp: function () {
                return 0;
            },

            /**
             * Pokemon weakness
             *
             * @return {null}pkml.db.Modifier}
             */
            weakness: function () {
                return null;
            },

            /**
             * Pokemon resistance
             *
             * @return {null|pkml.db.Modifier}
             */
            resistance: function () {
                return null;
            },

            /**
             * Retreat cost
             *
             * @return {pkml.db.Card.TYPE[]}
             */
            retreat: function () {
                return [];
            },

            //endregion

            /**
             * Card moves
             *
             * @return {pkml.db.Move[]}
             */
            moves: function () {
                return [];
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
            },

            /**
             * Damage operator
             * Used for weakness, strength & moves
             *
             * @type {Number}
             */
            MODIFIER: {
                NONE: 0,
                ADD: 1,
                SUB: 2,
                MULTIPLY: 3
            }

        }

    });

    gpf.define("pkml.db.Modifier", "gpf.interfaces.Interface", {

        public: {

            /**
             * Modifier
             *
             * @return {pkml.db.Card.MODIFIER}
             */
            modifier: function () {
                return pkml.db.Card.MODIFIER.NONE;
            },

            /**
             * Damage
             *
             * @return {number}
             */
            damage: function () {
                return 0;
            }

        }

    });

    gpf.define("pkml.db.Move", "gpf.interfaces.Interface", {

        public: {

            /**
             * Returns the translated move name
             *
             * @param {String} lg Language code
             * @return {string}
             */
            name: function (lg) {
                return "";
            },

            /**
             * Cost to pay to allow move execution
             *
             * @return {pkml.db.Card.TYPE[]}
             */
            cost: function () {
                return [];
            },

            /**
             * Damage of the move
             *
             * @return {number}
             */
            damage: function () {
                return 0;
            },

            /**
             * Damage modifier
             *
             * @return {pkml.db.Card.MODIFIER}
             */
            modifier: function () {
                return pkml.db.Card.MODIFIER.NONE;
            },

            /**
             * Returns the translated move description
             *
             * @param {String} lg Language code
             * @return {string}
             */
            description: function (lg) {
                return "";
            }
        }

    });

/*#ifndef(UMD)*/
}()); /* End of privacy scope */
/*#endif*/
