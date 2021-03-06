import _ from "lodash"
import { Name } from "./types"

export const sortByPopularity = (data: Name[]) => {
  return _.orderBy(data, ["amount", "name"], ["desc"])
}

export const sortAlphabetically = (data: Name[]) => {
  return _.orderBy(data, ["name"])
}

export const getTotal = (data: Name[]) => {
  return _.sumBy(data, "amount")
}

export const findByName = (data: Name[], name: string) => {
  return Object.values(data).find((d) => d.name === name)
}
