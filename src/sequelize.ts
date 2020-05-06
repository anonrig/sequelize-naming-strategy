import pluralize from 'pluralize'
import { Table } from 'typeorm'
import { DefaultNamingStrategy } from 'typeorm/naming-strategy/DefaultNamingStrategy'
import { NamingStrategyInterface } from 'typeorm/naming-strategy/NamingStrategyInterface'
import { camelCase } from 'typeorm/util/StringUtils'

export class SequelizeNamingStrategy extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  capitalFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  tableName(className: string, customName: string | undefined): string {
    return customName || this.capitalFirstLetter(camelCase(pluralize(className)))
  }

  uniqueConstraintName(tableOrName: Table | string, columnNames: string[]): string {
    const name = tableOrName instanceof Table ? tableOrName.name : tableOrName
    return [name, columnNames.map((n) => camelCase(n)).join('_'), 'key'].join('_')
  }

  primaryKeyName(tableOrName: Table | string, columnNames: string[]): string {
    const table = tableOrName instanceof Table ? tableOrName.name : tableOrName
    const names = columnNames.map((n) => camelCase(n)).join('_')
    return [table, names, 'pkey'].join('_')
  }

  relationName(propertyName: string): string {
    return propertyName
  }

  relationConstraintName(
    tableOrName: Table | string,
    columnNames: string[],
    where?: string
  ): string {
    const column = [...columnNames]
    column.sort()
    const name = tableOrName instanceof Table ? tableOrName.name : tableOrName

    return [name.replace('.', ''), column.map((c) => camelCase(c)).join('_'), where, 'rel']
      .filter((el) => !!el)
      .join('_')
  }

  foreignKeyName(
    tableOrName: Table | string,
    columnNames: string[],
    _referencedTablePath?: string,
    _referencedColumnNames?: string[]
  ): string {
    const clonedColumnNames = [...columnNames]
    clonedColumnNames.sort()
    const name = tableOrName instanceof Table ? tableOrName.name : tableOrName
    return [
      name.replace('.', ''),
      clonedColumnNames
        .sort()
        .map((n) => this.capitalFirstLetter(camelCase(n)))
        .join('_'),
      'fkey',
    ].join('_')
  }

  indexName(tableOrName: Table | string, columnNames: string[], where?: string): string {
    const name = tableOrName instanceof Table ? tableOrName.name : tableOrName
    const whereField = where != null ? `${camelCase(where)}` : null

    return [name, columnNames.map((n) => camelCase(n)).join('_'), whereField, 'key']
      .filter((i) => !!i)
      .join('_')
  }

  joinTableName(
    firstTableName: string,
    secondTableName: string,
    firstPropertyName: string,
    secondPropertyName: string
  ): string {
    return [
      firstTableName,
      camelCase(firstPropertyName),
      secondTableName,
      camelCase(secondPropertyName),
    ].join('_')
  }
}
