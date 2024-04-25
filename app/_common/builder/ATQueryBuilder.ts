export class ATQueryBuilder {

    query: any

    constructor(){
    }

    init(){
        this.query = {
            by: ['primary_address'],
            _count:{
              primary_address: true
            },
            where: {
    
            }
        }
        return this
    }

    addQuery(query: string[]){
        this.query.where.OR = [
            {
                map: {
                  name: {
                    in: query
                  }
                }
              },
              {
                user: {
                  at_id: {
                    in: query
                  }
                }
              },
              {
                secondary_address: {
                    in: query
                }
              },
              {
                categories: {
                  some: {
                      name: {
                        in: query
                    }
                  }
                }
              },
        ]
        return this
    }

    addMapName(mapName: string){
        this.query.where = {
            ...this.query.where,
            map: {
                name: mapName
            }
        }

        return this
    }

    addATID(at_id: string){
        this.query.where = {
            ...this.query.where,
            user: {
                at_id: at_id
            }
        }

        return this
    }

    build(){
        return this.query
    }


}