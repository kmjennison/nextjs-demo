/**
 * @flow
 * @relayHash e872e23ffbcfcb2e0832b6f081f1f529
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BlogPosts_viewer$ref = any;
export type datumsQueryVariables = {||};
export type datumsQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: BlogPosts_viewer$ref
  |}
|};
export type datumsQuery = {|
  variables: datumsQueryVariables,
  response: datumsQueryResponse,
|};
*/


/*
query datumsQuery {
  viewer {
    ...BlogPosts_viewer
    id
  }
}

fragment BlogPosts_viewer on Viewer {
  allBlogPosts(first: 10, orderBy: createdAt_DESC) {
    edges {
      node {
        ...BlogPostPreview_post
        id
      }
    }
  }
}

fragment BlogPostPreview_post on BlogPost {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "datumsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "BlogPosts_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "datumsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
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
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "datumsQuery",
    "id": null,
    "text": "query datumsQuery {\n  viewer {\n    ...BlogPosts_viewer\n    id\n  }\n}\n\nfragment BlogPosts_viewer on Viewer {\n  allBlogPosts(first: 10, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...BlogPostPreview_post\n        id\n      }\n    }\n  }\n}\n\nfragment BlogPostPreview_post on BlogPost {\n  id\n  title\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd04f79e0ba149c3393a294081cd608fe';
module.exports = node;
