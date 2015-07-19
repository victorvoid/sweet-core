import { List } from "immutable";
import { Token } from "./reader";


export default class Syntax {
    constructor(token, scopeset = List()) {
        this.token = token;
        this.scopeset = scopeset;
    }

    resolve() {
        return this.token.value;
    }

    val() {
        return this.token.value;
    }

    isIdentifier() {
        return this.token.type === Token.Identifier;
    }
    isBooleanLiteral() {
        return this.token.type === Token.BooleanLiteral;
    }
    isKeyword() {
        return this.token.type === Token.Keyword;
    }
    isNullLiteral() {
        return this.token.type === Token.NullLiteral;
    }
    isNumericLiteral() {
        return this.token.type === Token.NumericLiteral;
    }
    isPunctuator() {
        return this.token.type === Token.Punctuator;
    }
    isStringLiteral() {
        return this.token.type === Token.StringLiteral;
    }
    isRegularExpression() {
        return this.token.type === Token.RegularExpression;
    }
    isTemplate() {
        return this.token.type === Token.Template;
    }
    isDelimiter() {
        return this.token.type === Token.Delimiter;
    }
    isParenDelimiter() {
        return this.token.type === Token.Delimiter &&
               this.token.value === "()";
    }
    isCurlyDelimiter() {
        return this.token.type === Token.Delimiter &&
            this.token.value === "{}";
    }
    isSquareDelimiter() {
        return this.token.type === Token.Delimiter &&
            this.token.value === "[]";
    }
    isEOF() {
        return this.token.type === Token.EOF;
    }

    toString() {
        return this.token.value;
    }
}
