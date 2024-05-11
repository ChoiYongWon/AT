export class ATListQueryBuilder {

    query: any

    constructor(){
    }

    init(){
        this.query = {
            orderBy: {
                created_at: 'desc'
            },
            where: {

            }
            
        }
        return this
    }

    setOffset(offset: number){
        this.query.skip = offset;
        return this
    }

    setLimit(limit: number){
        this.query.take = limit;
        return this
    }

    setSelect(){
        this.query.select = {
            id: true,
            title: true,
            address: true,

            user: {
                select: {
                    at_id: true
                }
            },
            map: {
                select: {
                    name: true
                }
            },
            images: {
                select: {
                    originUrl: true,
                    sequence: true
                },
                orderBy: {
                    sequence: 'asc',
                  },
            },
            categories: {
                select: {
                    name: true,

                }
            }
            
        }
        return this
    }

    addArea(area: string){
        this.query.where.primary_address = area
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
                third_address: {
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