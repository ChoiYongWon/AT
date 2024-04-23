export class ATListQueryBuilder {

    query: any

    constructor(){
    }

    init(offset: number, limit: number){
        this.query = {
            skip: Number(offset),
            take: Number(limit),
            where: {

            }
            
        }
        return this
    }

    setSelect(){
        this.query.select = {
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
                    url: true,
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