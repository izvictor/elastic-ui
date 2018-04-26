interface Serializable<T> {
  deserialize(input: any): T;
}

export class ElasticServer implements Serializable<ElasticServer> {
  name: string;
  clusterName: string;
  clusterUUID: string;
  version: Version;
  tagline: string;


  deserialize(input: any): ElasticServer {
    this.name = input.name;
    this.clusterName = input.cluster_name;
    this.clusterUUID = input.cluster_uuid;
    this.version = new Version(input.version.number
      , input.version.build_hash, input.version.build_date
      , input.version.build_snapshot, input.version.lucene_version
      , input.version.minimum_wire_compatibility_version, input.version.minimum_index_compatibility_version);
    this.tagline = input.tagline;
    return this;
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
