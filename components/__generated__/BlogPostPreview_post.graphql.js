/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BlogPostPreview_post$ref: FragmentReference;
declare export opaque type BlogPostPreview_post$fragmentType: BlogPostPreview_post$ref;
export type BlogPostPreview_post = {|
  +id: string,
  +title: string,
  +$refType: BlogPostPreview_post$ref,
|};
export type BlogPostPreview_post$data = BlogPostPreview_post;
export type BlogPostPreview_post$key = {
  +$data?: BlogPostPreview_post$data,
  +$fragmentRefs: BlogPostPreview_post$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BlogPostPreview_post",
  "type": "BlogPost",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8cb8861c94062f8169421aaffe852b84';
module.exports = node;
