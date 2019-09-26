/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BlogPostPreview_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BlogPosts_viewer$ref: FragmentReference;
declare export opaque type BlogPosts_viewer$fragmentType: BlogPosts_viewer$ref;
export type BlogPosts_viewer = {|
  +allBlogPosts: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +$fragmentRefs: BlogPostPreview_post$ref,
      |}
    |}>
  |},
  +$refType: BlogPosts_viewer$ref,
|};
export type BlogPosts_viewer$data = BlogPosts_viewer;
export type BlogPosts_viewer$key = {
  +$data?: BlogPosts_viewer$data,
  +$fragmentRefs: BlogPosts_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BlogPosts_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allBlogPosts",
      "storageKey": "allBlogPosts(first:10,orderBy:\"createdAt_DESC\")",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        },
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "createdAt_DESC"
        }
      ],
      "concreteType": "BlogPostConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "BlogPostEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "BlogPost",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "BlogPostPreview_post",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '73b43dc2feadc9fe9b723a340f39bd27';
module.exports = node;
