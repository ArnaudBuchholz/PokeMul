/*#ifndef(UMD)*/
(function () { /* Begin of privacy scope */
    "use strict";
/*#endif*/

    gpf.define("pkml.db.static.database", {

        "[Class]": [gpf.$InterfaceImplement(pkml.db.Database)],

        public: {

            //region pkml.db.Database

            /**
             * @implements pkml.db.Database:initialize
             */
            initialize: function (options) {
                return this._broadcaster;
            },

            /**
             * @implements pkml.db.Database:count
             */
            count: function () {
                return 0;
            },

            /**
             * @implements pkml.db.Database:get
             */
            get: function (idx) {
                return null;
            },

            //endregion

            constructor: function () {
                this._broadcaster = new gpf.events.Broadcaster([
                    'error',
                    'initialized'
                ]);
                this._sets = [];
            }

        },

        private: {

            _broadcaster: null,

            "[_sets]": [gpf.$ClassIArray()],
            _sets: []

        }

    });

/*#ifndef(UMD)*/
}()); /* End of privacy scope */
/*#endif*/
