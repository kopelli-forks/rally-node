import _ from 'lodash';
import refUtils from './ref';

/**
 @module Query

 This module contains utility methods for working with the Rally query syntax
 */

export default class Query {
  private left: string | Query;
  private op: string;
  private right: string | null | Query;

  constructor(left: string | Query, op: string, right: string | Query) {
    this.left = left;
    this.op = op;
    this.right = right;
  }

  toQueryString(): string {
    let left = this.left;
    let right = this.right;
    if ((left as Query).toQueryString) {
      left = (left as Query).toQueryString();
    }

    if (right === null) {
      right = 'null';
    } else if ((right as Query).toQueryString) {
      right = (right as Query).toQueryString();
    } else if (refUtils.isRef(right)) {
      right = refUtils.getRelative(right);
    } else if (_.isString(right) && right.indexOf(' ') >= 0) {
      right = `"${right}"`;
    }

    return `(${left} ${this.op} ${right})`;
  }

  and(left: string | Query, op: string, right: string | Query) {
    return new Query(this, 'AND', (left instanceof Query) ? left : new Query(left, op, right));
  }

  or(left: string | Query, op: string, right: string | Query) {
    return new Query(this, 'OR', (left instanceof Query) ? left : new Query(left, op, right));
  }
}

export function where(left: string | Query, op: string, right: string | Query) {
  return new Query(left, op, right);
}
