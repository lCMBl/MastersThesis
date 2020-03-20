/**
 * @readonly
 * @enum {string}
 */
const DBType = {
    MEMBER:"members",
    POST:"posts",
    REDMARK:"redMarks",
    COUNCIL:"councils",
    QUERY:"queries"
}

const DBQuery = {
    COMMUNITYMEMBER: {name:"communitymember", type:DBType.MEMBER},
    SYSTEMCOUNCILMEMBER: {name:"systemcouncilmember", type:DBType.MEMBER}
}

db = {
    members:{},
    posts:{},
    redMarks:{},
    councils:{},
    queries:{}
}

function GetDB() {
    return db
}

/**
 * Creates a new query entry
 * @class
 * @param {Object} def 
 * @param {string} id 
 */
function QueryEntry(def, id) {
    this.def = def
    this.id = id
}

/**
 * 
 * @param {DBType} type 
 * @param {*} object
 * @param {Array<QueryEntry>} queries 
 */
function AddToDB(type, object, querieEntries=[]) {
    db[type][object.id] = object
    for (i=0; i<querieEntries.length; i++) {
        let q = querieEntries[i]
        if (!IsDefined(db.queries, q.def.name)) {
            db.queries[q.def.name] = []
        }

        db.queries[q.def.name].push(q.id)
    }
}

function SetupInitialDB() {
    AddToDB(DBType.MEMBER,
                {name:"bob", id:"bob1"},
                [new QueryEntry(DBQuery.COMMUNITYMEMBER, "bob1")]
                )
    for (mi = 0; mi < 15; mi++) {
        let id = "member" + mi

        AddToDB(DBType.MEMBER,
            {name:id, id:id},
            [new QueryEntry(DBQuery.COMMUNITYMEMBER, id)]
            )
    }
}

/**
 * 
 * @param {Object} query 
 */
function Query(query) {
    ids = db.queries[query.name]
    objs = []
    for (qi = 0; qi < ids.length; qi++) {
        objs.push(db[query.type][ids[qi]])
    }
    return objs
}