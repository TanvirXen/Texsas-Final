
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId:"44ridme2",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true

});