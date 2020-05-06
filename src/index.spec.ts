import { SequelizeNamingStrategy } from './sequelize'

describe('SequelizeNamingStrategy', () => {
  const strategy = new SequelizeNamingStrategy()

  describe('tableName', () => {
    it('should pluralize table name', () => {
      expect(strategy.tableName('country', undefined)).toEqual('Countries')
    })

    it('should not override custom name', () => {
      expect(strategy.tableName('country', 'country')).toEqual('country')
    })
  })

  describe('primaryKeyName', () => {
    it('should properly set primary key', () => {
      const response = strategy.primaryKeyName('Country', ['id', 'location'])
      expect(response).toEqual('Country_id_location_pkey')
    })
  })

  describe('relationName', () => {
    it('should return itself', () => {
      expect(strategy.relationName('hello')).toEqual('hello')
    })
  })

  describe('relationConstraintName', () => {
    it('should return properly', () => {
      expect(strategy.relationConstraintName('Countries', ['id', 'location'])).toEqual(
        'Countries_id_location_rel'
      )
    })
  })

  describe('foreignKeyName', () => {
    it('should return properly', () => {
      expect(strategy.foreignKeyName('Countries', ['CapitalId'])).toEqual(
        'Countries_CapitalId_fkey'
      )
    })
  })

  describe('indexName', () => {
    it('should return properly', () => {
      expect(strategy.indexName('Countries', ['name'])).toEqual('Countries_name_key')
    })
  })

  describe('joinTableName', () => {
    it('should return properly', () => {
      expect(strategy.joinTableName('Countries', 'Capitals', 'name', 'CountryId')).toEqual(
        'Countries_name_Capitals_countryId'
      )
    })
  })
})
