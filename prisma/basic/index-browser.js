
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  loginId: 'loginId',
  loginPw: 'loginPw',
  username: 'username',
  loginType: 'loginType',
  userType: 'userType',
  nickname: 'nickname',
  phone: 'phone',
  isDisable: 'isDisable'
});

exports.Prisma.NoticeScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  title: 'title',
  content: 'content',
  link: 'link',
  userId: 'userId'
});

exports.Prisma.BoardScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  title: 'title',
  content: 'content',
  link: 'link',
  startDay: 'startDay',
  endDay: 'endDay',
  isDisable: 'isDisable',
  userId: 'userId',
  boardType: 'boardType'
});

exports.Prisma.BoardImageScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  url: 'url',
  width: 'width',
  height: 'height',
  size: 'size',
  isThumb: 'isThumb',
  boardId: 'boardId'
});

exports.Prisma.BoardReplyScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  content: 'content',
  isDisable: 'isDisable',
  userId: 'userId',
  boardId: 'boardId',
  boardReplyId: 'boardReplyId',
  boardType: 'boardType'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.LoginType = makeEnum({
  LOCAL: 'LOCAL',
  ADMIN: 'ADMIN'
});

exports.UserType = makeEnum({
  GENERAL: 'GENERAL',
  BUSINESS: 'BUSINESS',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
});

exports.BoardType = makeEnum({
  BTALK: 'BTALK',
  BINFORM: 'BINFORM',
  BQUESTION: 'BQUESTION'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Notice: 'Notice',
  Board: 'Board',
  BoardImage: 'BoardImage',
  BoardReply: 'BoardReply'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
