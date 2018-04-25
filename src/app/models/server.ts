export class ElasticServer {
  name: string;
  clusterName: string;
  clusterUUID: string;
  version: Version;
  tagline: string;

  constructor(name: string,
              clusterName: string,
              clusterUUID: string,
              tagline: string) {
    this.name = name;
    this.clusterName = clusterName;
    this.clusterUUID = clusterUUID;
    this.tagline = tagline;
  }

}

export class Version {
  number: string;
  buildHash: string;
  buildDate: string;
  buildSnapshot: string;
  luceneVersion: string;
  minimumWireCompatibilityVersion: string;
  minimumIndexCompatibilityVersion: string;


  constructor(number: string,
              buildHash: string,
              buildDate: string,
              buildSnapshot: string,
              luceneVersion: string,
              minimumWireCompatibilityVersion: string,
              minimumIndexCompatibilityVersion: string) {
    this.number = number;
    this.buildHash = buildHash;
    this.buildDate = buildDate;
    this.buildSnapshot = buildSnapshot;
    this.luceneVersion = luceneVersion;
    this.minimumWireCompatibilityVersion = minimumWireCompatibilityVersion;
    this.minimumIndexCompatibilityVersion = minimumIndexCompatibilityVersion;

  }
}
