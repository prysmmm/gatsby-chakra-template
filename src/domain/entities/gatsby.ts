// @ts-nocheck
/* eslint-disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GatsbyImageData: any;
  JSON: any;
};

export type GatsbyAvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type GatsbyBlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<GatsbyImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type GatsbyBooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type GatsbyDateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type GatsbyDirectory = GatsbyNode & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<GatsbyNode>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: GatsbyInternal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<GatsbyNode>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type GatsbyDirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyDirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyDirectoryEdge>;
  group: Array<GatsbyDirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyDirectory>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyDirectoryConnectionDistinctArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryConnectionGroupArgs = {
  field: GatsbyDirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyDirectoryConnectionMaxArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryConnectionMinArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryConnectionSumArgs = {
  field: GatsbyDirectoryFieldSelector;
};

export type GatsbyDirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<GatsbyDirectory>;
  node: GatsbyDirectory;
  previous?: Maybe<GatsbyDirectory>;
};

export type GatsbyDirectoryFieldSelector = {
  absolutePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  accessTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  atime?: InputMaybe<GatsbyFieldSelectorEnum>;
  atimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  base?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthtime?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthtimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  changeTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  ctime?: InputMaybe<GatsbyFieldSelectorEnum>;
  ctimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  dev?: InputMaybe<GatsbyFieldSelectorEnum>;
  dir?: InputMaybe<GatsbyFieldSelectorEnum>;
  ext?: InputMaybe<GatsbyFieldSelectorEnum>;
  extension?: InputMaybe<GatsbyFieldSelectorEnum>;
  gid?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  ino?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  mode?: InputMaybe<GatsbyFieldSelectorEnum>;
  modifiedTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  mtime?: InputMaybe<GatsbyFieldSelectorEnum>;
  mtimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  name?: InputMaybe<GatsbyFieldSelectorEnum>;
  nlink?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  prettySize?: InputMaybe<GatsbyFieldSelectorEnum>;
  rdev?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativeDirectory?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  root?: InputMaybe<GatsbyFieldSelectorEnum>;
  size?: InputMaybe<GatsbyFieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<GatsbyFieldSelectorEnum>;
  uid?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyDirectoryFilterInput = {
  absolutePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  accessTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base?: InputMaybe<GatsbyStringQueryOperatorInput>;
  birthTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  changeTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  ctime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  ctimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  dev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  dir?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ext?: InputMaybe<GatsbyStringQueryOperatorInput>;
  extension?: InputMaybe<GatsbyStringQueryOperatorInput>;
  gid?: InputMaybe<GatsbyIntQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ino?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  mode?: InputMaybe<GatsbyIntQueryOperatorInput>;
  modifiedTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nlink?: InputMaybe<GatsbyIntQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prettySize?: InputMaybe<GatsbyStringQueryOperatorInput>;
  rdev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  root?: InputMaybe<GatsbyStringQueryOperatorInput>;
  size?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyIntQueryOperatorInput>;
};

export type GatsbyDirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyDirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbyDirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyDirectory>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyDirectoryGroupConnectionDistinctArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryGroupConnectionGroupArgs = {
  field: GatsbyDirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyDirectoryGroupConnectionMaxArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryGroupConnectionMinArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryGroupConnectionSumArgs = {
  field: GatsbyDirectoryFieldSelector;
};

export type GatsbyDirectorySortInput = {
  absolutePath?: InputMaybe<GatsbySortOrderEnum>;
  accessTime?: InputMaybe<GatsbySortOrderEnum>;
  atime?: InputMaybe<GatsbySortOrderEnum>;
  atimeMs?: InputMaybe<GatsbySortOrderEnum>;
  base?: InputMaybe<GatsbySortOrderEnum>;
  birthTime?: InputMaybe<GatsbySortOrderEnum>;
  birthtime?: InputMaybe<GatsbySortOrderEnum>;
  birthtimeMs?: InputMaybe<GatsbySortOrderEnum>;
  changeTime?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  ctime?: InputMaybe<GatsbySortOrderEnum>;
  ctimeMs?: InputMaybe<GatsbySortOrderEnum>;
  dev?: InputMaybe<GatsbySortOrderEnum>;
  dir?: InputMaybe<GatsbySortOrderEnum>;
  ext?: InputMaybe<GatsbySortOrderEnum>;
  extension?: InputMaybe<GatsbySortOrderEnum>;
  gid?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  ino?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  mode?: InputMaybe<GatsbySortOrderEnum>;
  modifiedTime?: InputMaybe<GatsbySortOrderEnum>;
  mtime?: InputMaybe<GatsbySortOrderEnum>;
  mtimeMs?: InputMaybe<GatsbySortOrderEnum>;
  name?: InputMaybe<GatsbySortOrderEnum>;
  nlink?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  prettySize?: InputMaybe<GatsbySortOrderEnum>;
  rdev?: InputMaybe<GatsbySortOrderEnum>;
  relativeDirectory?: InputMaybe<GatsbySortOrderEnum>;
  relativePath?: InputMaybe<GatsbySortOrderEnum>;
  root?: InputMaybe<GatsbySortOrderEnum>;
  size?: InputMaybe<GatsbySortOrderEnum>;
  sourceInstanceName?: InputMaybe<GatsbySortOrderEnum>;
  uid?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyDuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export enum GatsbyFieldSelectorEnum {
  Select = 'SELECT'
}

export type GatsbyFile = GatsbyNode & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<GatsbyImageSharp>;
  children: Array<GatsbyNode>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<GatsbyImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: GatsbyInternal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<GatsbyNode>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type GatsbyFileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyFileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyFileEdge>;
  group: Array<GatsbyFileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyFile>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyFileConnectionDistinctArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileConnectionGroupArgs = {
  field: GatsbyFileFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyFileConnectionMaxArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileConnectionMinArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileConnectionSumArgs = {
  field: GatsbyFileFieldSelector;
};

export type GatsbyFileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<GatsbyFile>;
  node: GatsbyFile;
  previous?: Maybe<GatsbyFile>;
};

export type GatsbyFileFieldSelector = {
  absolutePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  accessTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  atime?: InputMaybe<GatsbyFieldSelectorEnum>;
  atimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  base?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthtime?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthtimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  blksize?: InputMaybe<GatsbyFieldSelectorEnum>;
  blocks?: InputMaybe<GatsbyFieldSelectorEnum>;
  changeTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  childImageSharp?: InputMaybe<GatsbyImageSharpFieldSelector>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  childrenImageSharp?: InputMaybe<GatsbyImageSharpFieldSelector>;
  ctime?: InputMaybe<GatsbyFieldSelectorEnum>;
  ctimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  dev?: InputMaybe<GatsbyFieldSelectorEnum>;
  dir?: InputMaybe<GatsbyFieldSelectorEnum>;
  ext?: InputMaybe<GatsbyFieldSelectorEnum>;
  extension?: InputMaybe<GatsbyFieldSelectorEnum>;
  gid?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  ino?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  mode?: InputMaybe<GatsbyFieldSelectorEnum>;
  modifiedTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  mtime?: InputMaybe<GatsbyFieldSelectorEnum>;
  mtimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  name?: InputMaybe<GatsbyFieldSelectorEnum>;
  nlink?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  prettySize?: InputMaybe<GatsbyFieldSelectorEnum>;
  publicURL?: InputMaybe<GatsbyFieldSelectorEnum>;
  rdev?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativeDirectory?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  root?: InputMaybe<GatsbyFieldSelectorEnum>;
  size?: InputMaybe<GatsbyFieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<GatsbyFieldSelectorEnum>;
  uid?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyFileFilterInput = {
  absolutePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  accessTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base?: InputMaybe<GatsbyStringQueryOperatorInput>;
  birthTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  blksize?: InputMaybe<GatsbyIntQueryOperatorInput>;
  blocks?: InputMaybe<GatsbyIntQueryOperatorInput>;
  changeTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  childImageSharp?: InputMaybe<GatsbyImageSharpFilterInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  childrenImageSharp?: InputMaybe<GatsbyImageSharpFilterListInput>;
  ctime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  ctimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  dev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  dir?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ext?: InputMaybe<GatsbyStringQueryOperatorInput>;
  extension?: InputMaybe<GatsbyStringQueryOperatorInput>;
  gid?: InputMaybe<GatsbyIntQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ino?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  mode?: InputMaybe<GatsbyIntQueryOperatorInput>;
  modifiedTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nlink?: InputMaybe<GatsbyIntQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prettySize?: InputMaybe<GatsbyStringQueryOperatorInput>;
  publicURL?: InputMaybe<GatsbyStringQueryOperatorInput>;
  rdev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  root?: InputMaybe<GatsbyStringQueryOperatorInput>;
  size?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyIntQueryOperatorInput>;
};

export type GatsbyFileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyFileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbyFileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyFile>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyFileGroupConnectionDistinctArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileGroupConnectionGroupArgs = {
  field: GatsbyFileFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyFileGroupConnectionMaxArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileGroupConnectionMinArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileGroupConnectionSumArgs = {
  field: GatsbyFileFieldSelector;
};

export type GatsbyFileSortInput = {
  absolutePath?: InputMaybe<GatsbySortOrderEnum>;
  accessTime?: InputMaybe<GatsbySortOrderEnum>;
  atime?: InputMaybe<GatsbySortOrderEnum>;
  atimeMs?: InputMaybe<GatsbySortOrderEnum>;
  base?: InputMaybe<GatsbySortOrderEnum>;
  birthTime?: InputMaybe<GatsbySortOrderEnum>;
  birthtime?: InputMaybe<GatsbySortOrderEnum>;
  birthtimeMs?: InputMaybe<GatsbySortOrderEnum>;
  blksize?: InputMaybe<GatsbySortOrderEnum>;
  blocks?: InputMaybe<GatsbySortOrderEnum>;
  changeTime?: InputMaybe<GatsbySortOrderEnum>;
  childImageSharp?: InputMaybe<GatsbyImageSharpSortInput>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  childrenImageSharp?: InputMaybe<GatsbyImageSharpSortInput>;
  ctime?: InputMaybe<GatsbySortOrderEnum>;
  ctimeMs?: InputMaybe<GatsbySortOrderEnum>;
  dev?: InputMaybe<GatsbySortOrderEnum>;
  dir?: InputMaybe<GatsbySortOrderEnum>;
  ext?: InputMaybe<GatsbySortOrderEnum>;
  extension?: InputMaybe<GatsbySortOrderEnum>;
  gid?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  ino?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  mode?: InputMaybe<GatsbySortOrderEnum>;
  modifiedTime?: InputMaybe<GatsbySortOrderEnum>;
  mtime?: InputMaybe<GatsbySortOrderEnum>;
  mtimeMs?: InputMaybe<GatsbySortOrderEnum>;
  name?: InputMaybe<GatsbySortOrderEnum>;
  nlink?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  prettySize?: InputMaybe<GatsbySortOrderEnum>;
  publicURL?: InputMaybe<GatsbySortOrderEnum>;
  rdev?: InputMaybe<GatsbySortOrderEnum>;
  relativeDirectory?: InputMaybe<GatsbySortOrderEnum>;
  relativePath?: InputMaybe<GatsbySortOrderEnum>;
  root?: InputMaybe<GatsbySortOrderEnum>;
  size?: InputMaybe<GatsbySortOrderEnum>;
  sourceInstanceName?: InputMaybe<GatsbySortOrderEnum>;
  uid?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyFloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type GatsbyGatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export enum GatsbyGatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyGatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyGatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum GatsbyImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum GatsbyImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type GatsbyImageSharp = GatsbyNode & {
  __typename?: 'ImageSharp';
  children: Array<GatsbyNode>;
  fixed?: Maybe<GatsbyImageSharpFixed>;
  fluid?: Maybe<GatsbyImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  id: Scalars['ID'];
  internal: GatsbyInternal;
  original?: Maybe<GatsbyImageSharpOriginal>;
  parent?: Maybe<GatsbyNode>;
  resize?: Maybe<GatsbyImageSharpResize>;
};


export type GatsbyImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<GatsbyImageCropFocus>;
  duotone?: InputMaybe<GatsbyDuotoneGradient>;
  fit?: InputMaybe<GatsbyImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<GatsbyImageFormat>;
  toFormatBase64?: InputMaybe<GatsbyImageFormat>;
  traceSVG?: InputMaybe<GatsbyPotrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<GatsbyImageCropFocus>;
  duotone?: InputMaybe<GatsbyDuotoneGradient>;
  fit?: InputMaybe<GatsbyImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<GatsbyImageFormat>;
  toFormatBase64?: InputMaybe<GatsbyImageFormat>;
  traceSVG?: InputMaybe<GatsbyPotrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<GatsbyAvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<GatsbyBlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<GatsbyJpgOptions>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  pngOptions?: InputMaybe<GatsbyPngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<GatsbyPotrace>;
  transformOptions?: InputMaybe<GatsbyTransformOptions>;
  webpOptions?: InputMaybe<GatsbyWebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<GatsbyImageCropFocus>;
  duotone?: InputMaybe<GatsbyDuotoneGradient>;
  fit?: InputMaybe<GatsbyImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<GatsbyImageFormat>;
  traceSVG?: InputMaybe<GatsbyPotrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type GatsbyImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyImageSharpEdge>;
  group: Array<GatsbyImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyImageSharp>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyImageSharpConnectionDistinctArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpConnectionGroupArgs = {
  field: GatsbyImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpConnectionMaxArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpConnectionMinArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpConnectionSumArgs = {
  field: GatsbyImageSharpFieldSelector;
};

export type GatsbyImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<GatsbyImageSharp>;
  node: GatsbyImageSharp;
  previous?: Maybe<GatsbyImageSharp>;
};

export type GatsbyImageSharpFieldSelector = {
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  fixed?: InputMaybe<GatsbyImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<GatsbyImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  original?: InputMaybe<GatsbyImageSharpOriginalFieldSelector>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  resize?: InputMaybe<GatsbyImageSharpResizeFieldSelector>;
};

export type GatsbyImageSharpFilterInput = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  fixed?: InputMaybe<GatsbyImageSharpFixedFilterInput>;
  fluid?: InputMaybe<GatsbyImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyGatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  original?: InputMaybe<GatsbyImageSharpOriginalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  resize?: InputMaybe<GatsbyImageSharpResizeFilterInput>;
};

export type GatsbyImageSharpFilterListInput = {
  elemMatch?: InputMaybe<GatsbyImageSharpFilterInput>;
};

export type GatsbyImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type GatsbyImageSharpFixedFieldSelector = {
  aspectRatio?: InputMaybe<GatsbyFieldSelectorEnum>;
  base64?: InputMaybe<GatsbyFieldSelectorEnum>;
  height?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalName?: InputMaybe<GatsbyFieldSelectorEnum>;
  src?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcSet?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcSetWebp?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcWebp?: InputMaybe<GatsbyFieldSelectorEnum>;
  tracedSVG?: InputMaybe<GatsbyFieldSelectorEnum>;
  width?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base64?: InputMaybe<GatsbyStringQueryOperatorInput>;
  height?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  originalName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  src?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcSet?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcWebp?: InputMaybe<GatsbyStringQueryOperatorInput>;
  tracedSVG?: InputMaybe<GatsbyStringQueryOperatorInput>;
  width?: InputMaybe<GatsbyFloatQueryOperatorInput>;
};

export type GatsbyImageSharpFixedSortInput = {
  aspectRatio?: InputMaybe<GatsbySortOrderEnum>;
  base64?: InputMaybe<GatsbySortOrderEnum>;
  height?: InputMaybe<GatsbySortOrderEnum>;
  originalName?: InputMaybe<GatsbySortOrderEnum>;
  src?: InputMaybe<GatsbySortOrderEnum>;
  srcSet?: InputMaybe<GatsbySortOrderEnum>;
  srcSetWebp?: InputMaybe<GatsbySortOrderEnum>;
  srcWebp?: InputMaybe<GatsbySortOrderEnum>;
  tracedSVG?: InputMaybe<GatsbySortOrderEnum>;
  width?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type GatsbyImageSharpFluidFieldSelector = {
  aspectRatio?: InputMaybe<GatsbyFieldSelectorEnum>;
  base64?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalImg?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalName?: InputMaybe<GatsbyFieldSelectorEnum>;
  presentationHeight?: InputMaybe<GatsbyFieldSelectorEnum>;
  presentationWidth?: InputMaybe<GatsbyFieldSelectorEnum>;
  sizes?: InputMaybe<GatsbyFieldSelectorEnum>;
  src?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcSet?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcSetWebp?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcWebp?: InputMaybe<GatsbyFieldSelectorEnum>;
  tracedSVG?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base64?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalImg?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  presentationHeight?: InputMaybe<GatsbyIntQueryOperatorInput>;
  presentationWidth?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sizes?: InputMaybe<GatsbyStringQueryOperatorInput>;
  src?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcSet?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcWebp?: InputMaybe<GatsbyStringQueryOperatorInput>;
  tracedSVG?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbyImageSharpFluidSortInput = {
  aspectRatio?: InputMaybe<GatsbySortOrderEnum>;
  base64?: InputMaybe<GatsbySortOrderEnum>;
  originalImg?: InputMaybe<GatsbySortOrderEnum>;
  originalName?: InputMaybe<GatsbySortOrderEnum>;
  presentationHeight?: InputMaybe<GatsbySortOrderEnum>;
  presentationWidth?: InputMaybe<GatsbySortOrderEnum>;
  sizes?: InputMaybe<GatsbySortOrderEnum>;
  src?: InputMaybe<GatsbySortOrderEnum>;
  srcSet?: InputMaybe<GatsbySortOrderEnum>;
  srcSetWebp?: InputMaybe<GatsbySortOrderEnum>;
  srcWebp?: InputMaybe<GatsbySortOrderEnum>;
  tracedSVG?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbyImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyImageSharp>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyImageSharpGroupConnectionDistinctArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpGroupConnectionGroupArgs = {
  field: GatsbyImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpGroupConnectionMaxArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpGroupConnectionMinArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpGroupConnectionSumArgs = {
  field: GatsbyImageSharpFieldSelector;
};

export type GatsbyImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type GatsbyImageSharpOriginalFieldSelector = {
  height?: InputMaybe<GatsbyFieldSelectorEnum>;
  src?: InputMaybe<GatsbyFieldSelectorEnum>;
  width?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyImageSharpOriginalFilterInput = {
  height?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  src?: InputMaybe<GatsbyStringQueryOperatorInput>;
  width?: InputMaybe<GatsbyFloatQueryOperatorInput>;
};

export type GatsbyImageSharpOriginalSortInput = {
  height?: InputMaybe<GatsbySortOrderEnum>;
  src?: InputMaybe<GatsbySortOrderEnum>;
  width?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type GatsbyImageSharpResizeFieldSelector = {
  aspectRatio?: InputMaybe<GatsbyFieldSelectorEnum>;
  height?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalName?: InputMaybe<GatsbyFieldSelectorEnum>;
  src?: InputMaybe<GatsbyFieldSelectorEnum>;
  tracedSVG?: InputMaybe<GatsbyFieldSelectorEnum>;
  width?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  height?: InputMaybe<GatsbyIntQueryOperatorInput>;
  originalName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  src?: InputMaybe<GatsbyStringQueryOperatorInput>;
  tracedSVG?: InputMaybe<GatsbyStringQueryOperatorInput>;
  width?: InputMaybe<GatsbyIntQueryOperatorInput>;
};

export type GatsbyImageSharpResizeSortInput = {
  aspectRatio?: InputMaybe<GatsbySortOrderEnum>;
  height?: InputMaybe<GatsbySortOrderEnum>;
  originalName?: InputMaybe<GatsbySortOrderEnum>;
  src?: InputMaybe<GatsbySortOrderEnum>;
  tracedSVG?: InputMaybe<GatsbySortOrderEnum>;
  width?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyImageSharpSortInput = {
  children?: InputMaybe<GatsbyNodeSortInput>;
  fixed?: InputMaybe<GatsbyImageSharpFixedSortInput>;
  fluid?: InputMaybe<GatsbyImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  original?: InputMaybe<GatsbyImageSharpOriginalSortInput>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  resize?: InputMaybe<GatsbyImageSharpResizeSortInput>;
};

export type GatsbyIntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type GatsbyInternal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type GatsbyInternalFieldSelector = {
  content?: InputMaybe<GatsbyFieldSelectorEnum>;
  contentDigest?: InputMaybe<GatsbyFieldSelectorEnum>;
  contentFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  description?: InputMaybe<GatsbyFieldSelectorEnum>;
  fieldOwners?: InputMaybe<GatsbyFieldSelectorEnum>;
  ignoreType?: InputMaybe<GatsbyFieldSelectorEnum>;
  mediaType?: InputMaybe<GatsbyFieldSelectorEnum>;
  owner?: InputMaybe<GatsbyFieldSelectorEnum>;
  type?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyInternalFilterInput = {
  content?: InputMaybe<GatsbyStringQueryOperatorInput>;
  contentDigest?: InputMaybe<GatsbyStringQueryOperatorInput>;
  contentFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  description?: InputMaybe<GatsbyStringQueryOperatorInput>;
  fieldOwners?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ignoreType?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  mediaType?: InputMaybe<GatsbyStringQueryOperatorInput>;
  owner?: InputMaybe<GatsbyStringQueryOperatorInput>;
  type?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbyInternalSortInput = {
  content?: InputMaybe<GatsbySortOrderEnum>;
  contentDigest?: InputMaybe<GatsbySortOrderEnum>;
  contentFilePath?: InputMaybe<GatsbySortOrderEnum>;
  description?: InputMaybe<GatsbySortOrderEnum>;
  fieldOwners?: InputMaybe<GatsbySortOrderEnum>;
  ignoreType?: InputMaybe<GatsbySortOrderEnum>;
  mediaType?: InputMaybe<GatsbySortOrderEnum>;
  owner?: InputMaybe<GatsbySortOrderEnum>;
  type?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyJpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type GatsbyJsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type GatsbyNode = {
  children: Array<GatsbyNode>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  parent?: Maybe<GatsbyNode>;
};

export type GatsbyNodeFieldSelector = {
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
};

export type GatsbyNodeFilterInput = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
};

export type GatsbyNodeFilterListInput = {
  elemMatch?: InputMaybe<GatsbyNodeFilterInput>;
};

export type GatsbyNodeSortInput = {
  children?: InputMaybe<GatsbyNodeSortInput>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
};

export type GatsbyPngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type GatsbyPageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type GatsbyPotrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<GatsbyPotraceTurnPolicy>;
};

export enum GatsbyPotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type GatsbyQuery = {
  __typename?: 'Query';
  allDirectory: GatsbyDirectoryConnection;
  allFile: GatsbyFileConnection;
  allImageSharp: GatsbyImageSharpConnection;
  allSite: GatsbySiteConnection;
  allSiteBuildMetadata: GatsbySiteBuildMetadataConnection;
  allSiteFunction: GatsbySiteFunctionConnection;
  allSitePage: GatsbySitePageConnection;
  allSitePlugin: GatsbySitePluginConnection;
  directory?: Maybe<GatsbyDirectory>;
  file?: Maybe<GatsbyFile>;
  imageSharp?: Maybe<GatsbyImageSharp>;
  site?: Maybe<GatsbySite>;
  siteBuildMetadata?: Maybe<GatsbySiteBuildMetadata>;
  siteFunction?: Maybe<GatsbySiteFunction>;
  sitePage?: Maybe<GatsbySitePage>;
  sitePlugin?: Maybe<GatsbySitePlugin>;
};


export type GatsbyQueryAllDirectoryArgs = {
  filter?: InputMaybe<GatsbyDirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbyDirectorySortInput>>>;
};


export type GatsbyQueryAllFileArgs = {
  filter?: InputMaybe<GatsbyFileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbyFileSortInput>>>;
};


export type GatsbyQueryAllImageSharpArgs = {
  filter?: InputMaybe<GatsbyImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbyImageSharpSortInput>>>;
};


export type GatsbyQueryAllSiteArgs = {
  filter?: InputMaybe<GatsbySiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySiteSortInput>>>;
};


export type GatsbyQueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<GatsbySiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySiteBuildMetadataSortInput>>>;
};


export type GatsbyQueryAllSiteFunctionArgs = {
  filter?: InputMaybe<GatsbySiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySiteFunctionSortInput>>>;
};


export type GatsbyQueryAllSitePageArgs = {
  filter?: InputMaybe<GatsbySitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySitePageSortInput>>>;
};


export type GatsbyQueryAllSitePluginArgs = {
  filter?: InputMaybe<GatsbySitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySitePluginSortInput>>>;
};


export type GatsbyQueryDirectoryArgs = {
  absolutePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  accessTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base?: InputMaybe<GatsbyStringQueryOperatorInput>;
  birthTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  changeTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  ctime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  ctimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  dev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  dir?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ext?: InputMaybe<GatsbyStringQueryOperatorInput>;
  extension?: InputMaybe<GatsbyStringQueryOperatorInput>;
  gid?: InputMaybe<GatsbyIntQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ino?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  mode?: InputMaybe<GatsbyIntQueryOperatorInput>;
  modifiedTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nlink?: InputMaybe<GatsbyIntQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prettySize?: InputMaybe<GatsbyStringQueryOperatorInput>;
  rdev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  root?: InputMaybe<GatsbyStringQueryOperatorInput>;
  size?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyIntQueryOperatorInput>;
};


export type GatsbyQueryFileArgs = {
  absolutePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  accessTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base?: InputMaybe<GatsbyStringQueryOperatorInput>;
  birthTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  blksize?: InputMaybe<GatsbyIntQueryOperatorInput>;
  blocks?: InputMaybe<GatsbyIntQueryOperatorInput>;
  changeTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  childImageSharp?: InputMaybe<GatsbyImageSharpFilterInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  childrenImageSharp?: InputMaybe<GatsbyImageSharpFilterListInput>;
  ctime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  ctimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  dev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  dir?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ext?: InputMaybe<GatsbyStringQueryOperatorInput>;
  extension?: InputMaybe<GatsbyStringQueryOperatorInput>;
  gid?: InputMaybe<GatsbyIntQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ino?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  mode?: InputMaybe<GatsbyIntQueryOperatorInput>;
  modifiedTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nlink?: InputMaybe<GatsbyIntQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prettySize?: InputMaybe<GatsbyStringQueryOperatorInput>;
  publicURL?: InputMaybe<GatsbyStringQueryOperatorInput>;
  rdev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  root?: InputMaybe<GatsbyStringQueryOperatorInput>;
  size?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyIntQueryOperatorInput>;
};


export type GatsbyQueryImageSharpArgs = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  fixed?: InputMaybe<GatsbyImageSharpFixedFilterInput>;
  fluid?: InputMaybe<GatsbyImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyGatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  original?: InputMaybe<GatsbyImageSharpOriginalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  resize?: InputMaybe<GatsbyImageSharpResizeFilterInput>;
};


export type GatsbyQuerySiteArgs = {
  buildTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  graphqlTypegen?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  host?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  jsxRuntime?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pathPrefix?: InputMaybe<GatsbyStringQueryOperatorInput>;
  polyfill?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  port?: InputMaybe<GatsbyIntQueryOperatorInput>;
  siteMetadata?: InputMaybe<GatsbySiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<GatsbyStringQueryOperatorInput>;
};


export type GatsbyQuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
};


export type GatsbyQuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  functionRoute?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  matchPath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pluginName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
};


export type GatsbyQuerySitePageArgs = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  component?: InputMaybe<GatsbyStringQueryOperatorInput>;
  componentChunkName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  internalComponentName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  matchPath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pageContext?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  path?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pluginCreator?: InputMaybe<GatsbySitePluginFilterInput>;
};


export type GatsbyQuerySitePluginArgs = {
  browserAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  packageJson?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pluginFilepath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pluginOptions?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  resolve?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  version?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySite = GatsbyNode & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<GatsbyNode>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<GatsbyNode>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<GatsbySiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']>;
};


export type GatsbySiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbySiteBuildMetadata = GatsbyNode & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<GatsbyNode>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  parent?: Maybe<GatsbyNode>;
};


export type GatsbySiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbySiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteBuildMetadataEdge>;
  group: Array<GatsbySiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySiteBuildMetadata>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteBuildMetadataConnectionDistinctArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataConnectionGroupArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteBuildMetadataConnectionMaxArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataConnectionMinArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataConnectionSumArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};

export type GatsbySiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<GatsbySiteBuildMetadata>;
  node: GatsbySiteBuildMetadata;
  previous?: Maybe<GatsbySiteBuildMetadata>;
};

export type GatsbySiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
};

export type GatsbySiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
};

export type GatsbySiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySiteBuildMetadata>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteBuildMetadataGroupConnectionDistinctArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataGroupConnectionGroupArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteBuildMetadataGroupConnectionMaxArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataGroupConnectionMinArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataGroupConnectionSumArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};

export type GatsbySiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
};

export type GatsbySiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteEdge>;
  group: Array<GatsbySiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySite>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteConnectionDistinctArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteConnectionGroupArgs = {
  field: GatsbySiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteConnectionMaxArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteConnectionMinArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteConnectionSumArgs = {
  field: GatsbySiteFieldSelector;
};

export type GatsbySiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<GatsbySite>;
  node: GatsbySite;
  previous?: Maybe<GatsbySite>;
};

export type GatsbySiteFieldSelector = {
  buildTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  graphqlTypegen?: InputMaybe<GatsbyFieldSelectorEnum>;
  host?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  jsxRuntime?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  pathPrefix?: InputMaybe<GatsbyFieldSelectorEnum>;
  polyfill?: InputMaybe<GatsbyFieldSelectorEnum>;
  port?: InputMaybe<GatsbyFieldSelectorEnum>;
  siteMetadata?: InputMaybe<GatsbySiteSiteMetadataFieldSelector>;
  trailingSlash?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbySiteFilterInput = {
  buildTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  graphqlTypegen?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  host?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  jsxRuntime?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pathPrefix?: InputMaybe<GatsbyStringQueryOperatorInput>;
  polyfill?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  port?: InputMaybe<GatsbyIntQueryOperatorInput>;
  siteMetadata?: InputMaybe<GatsbySiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySiteFunction = GatsbyNode & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<GatsbyNode>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: GatsbyInternal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<GatsbyNode>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type GatsbySiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteFunctionEdge>;
  group: Array<GatsbySiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySiteFunction>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteFunctionConnectionDistinctArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionConnectionGroupArgs = {
  field: GatsbySiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteFunctionConnectionMaxArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionConnectionMinArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionConnectionSumArgs = {
  field: GatsbySiteFunctionFieldSelector;
};

export type GatsbySiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<GatsbySiteFunction>;
  node: GatsbySiteFunction;
  previous?: Maybe<GatsbySiteFunction>;
};

export type GatsbySiteFunctionFieldSelector = {
  absoluteCompiledFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  functionRoute?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  matchPath?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  pluginName?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbySiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  functionRoute?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  matchPath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pluginName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySiteFunction>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteFunctionGroupConnectionDistinctArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionGroupConnectionGroupArgs = {
  field: GatsbySiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteFunctionGroupConnectionMaxArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionGroupConnectionMinArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionGroupConnectionSumArgs = {
  field: GatsbySiteFunctionFieldSelector;
};

export type GatsbySiteFunctionSortInput = {
  absoluteCompiledFilePath?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  functionRoute?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  matchPath?: InputMaybe<GatsbySortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<GatsbySortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  pluginName?: InputMaybe<GatsbySortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbySiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySite>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteGroupConnectionDistinctArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteGroupConnectionGroupArgs = {
  field: GatsbySiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteGroupConnectionMaxArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteGroupConnectionMinArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteGroupConnectionSumArgs = {
  field: GatsbySiteFieldSelector;
};

export type GatsbySitePage = GatsbyNode & {
  __typename?: 'SitePage';
  children: Array<GatsbyNode>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: GatsbyInternal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<GatsbyNode>;
  path: Scalars['String'];
  pluginCreator?: Maybe<GatsbySitePlugin>;
};

export type GatsbySitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySitePageEdge>;
  group: Array<GatsbySitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySitePage>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySitePageConnectionDistinctArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageConnectionGroupArgs = {
  field: GatsbySitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySitePageConnectionMaxArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageConnectionMinArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageConnectionSumArgs = {
  field: GatsbySitePageFieldSelector;
};

export type GatsbySitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<GatsbySitePage>;
  node: GatsbySitePage;
  previous?: Maybe<GatsbySitePage>;
};

export type GatsbySitePageFieldSelector = {
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  component?: InputMaybe<GatsbyFieldSelectorEnum>;
  componentChunkName?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  internalComponentName?: InputMaybe<GatsbyFieldSelectorEnum>;
  matchPath?: InputMaybe<GatsbyFieldSelectorEnum>;
  pageContext?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  path?: InputMaybe<GatsbyFieldSelectorEnum>;
  pluginCreator?: InputMaybe<GatsbySitePluginFieldSelector>;
};

export type GatsbySitePageFilterInput = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  component?: InputMaybe<GatsbyStringQueryOperatorInput>;
  componentChunkName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  internalComponentName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  matchPath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pageContext?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  path?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pluginCreator?: InputMaybe<GatsbySitePluginFilterInput>;
};

export type GatsbySitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySitePage>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySitePageGroupConnectionDistinctArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageGroupConnectionGroupArgs = {
  field: GatsbySitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySitePageGroupConnectionMaxArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageGroupConnectionMinArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageGroupConnectionSumArgs = {
  field: GatsbySitePageFieldSelector;
};

export type GatsbySitePageSortInput = {
  children?: InputMaybe<GatsbyNodeSortInput>;
  component?: InputMaybe<GatsbySortOrderEnum>;
  componentChunkName?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  internalComponentName?: InputMaybe<GatsbySortOrderEnum>;
  matchPath?: InputMaybe<GatsbySortOrderEnum>;
  pageContext?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  path?: InputMaybe<GatsbySortOrderEnum>;
  pluginCreator?: InputMaybe<GatsbySitePluginSortInput>;
};

export type GatsbySitePlugin = GatsbyNode & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<GatsbyNode>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<GatsbyNode>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type GatsbySitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySitePluginEdge>;
  group: Array<GatsbySitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySitePlugin>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySitePluginConnectionDistinctArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginConnectionGroupArgs = {
  field: GatsbySitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySitePluginConnectionMaxArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginConnectionMinArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginConnectionSumArgs = {
  field: GatsbySitePluginFieldSelector;
};

export type GatsbySitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<GatsbySitePlugin>;
  node: GatsbySitePlugin;
  previous?: Maybe<GatsbySitePlugin>;
};

export type GatsbySitePluginFieldSelector = {
  browserAPIs?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  name?: InputMaybe<GatsbyFieldSelectorEnum>;
  nodeAPIs?: InputMaybe<GatsbyFieldSelectorEnum>;
  packageJson?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  pluginFilepath?: InputMaybe<GatsbyFieldSelectorEnum>;
  pluginOptions?: InputMaybe<GatsbyFieldSelectorEnum>;
  resolve?: InputMaybe<GatsbyFieldSelectorEnum>;
  ssrAPIs?: InputMaybe<GatsbyFieldSelectorEnum>;
  version?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbySitePluginFilterInput = {
  browserAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  packageJson?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pluginFilepath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pluginOptions?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  resolve?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  version?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySitePlugin>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySitePluginGroupConnectionDistinctArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginGroupConnectionGroupArgs = {
  field: GatsbySitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySitePluginGroupConnectionMaxArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginGroupConnectionMinArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginGroupConnectionSumArgs = {
  field: GatsbySitePluginFieldSelector;
};

export type GatsbySitePluginSortInput = {
  browserAPIs?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  name?: InputMaybe<GatsbySortOrderEnum>;
  nodeAPIs?: InputMaybe<GatsbySortOrderEnum>;
  packageJson?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  pluginFilepath?: InputMaybe<GatsbySortOrderEnum>;
  pluginOptions?: InputMaybe<GatsbySortOrderEnum>;
  resolve?: InputMaybe<GatsbySortOrderEnum>;
  ssrAPIs?: InputMaybe<GatsbySortOrderEnum>;
  version?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbySiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GatsbySiteSiteMetadataFieldSelector = {
  description?: InputMaybe<GatsbyFieldSelectorEnum>;
  title?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbySiteSiteMetadataFilterInput = {
  description?: InputMaybe<GatsbyStringQueryOperatorInput>;
  title?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySiteSiteMetadataSortInput = {
  description?: InputMaybe<GatsbySortOrderEnum>;
  title?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbySiteSortInput = {
  buildTime?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  graphqlTypegen?: InputMaybe<GatsbySortOrderEnum>;
  host?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  jsxRuntime?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  pathPrefix?: InputMaybe<GatsbySortOrderEnum>;
  polyfill?: InputMaybe<GatsbySortOrderEnum>;
  port?: InputMaybe<GatsbySortOrderEnum>;
  siteMetadata?: InputMaybe<GatsbySiteSiteMetadataSortInput>;
  trailingSlash?: InputMaybe<GatsbySortOrderEnum>;
};

export enum GatsbySortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type GatsbyStringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type GatsbyTransformOptions = {
  cropFocus?: InputMaybe<GatsbyImageCropFocus>;
  duotone?: InputMaybe<GatsbyDuotoneGradient>;
  fit?: InputMaybe<GatsbyImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type GatsbyWebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};
