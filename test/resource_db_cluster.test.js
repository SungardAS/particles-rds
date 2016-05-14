var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("db_cluster", function() {

    it("creates an empty db_cluster", function() {
      cTests.testParticle(
        "resource",
        "db_cluster",
        require('./fixtures/resource_db_cluster_output_1'),
        {logicalId: "DBCluster"}
      );
    });

    it("sets engine", function() {
      cTests.testParticle(
        "resource",
        "db_cluster",
        require('./fixtures/resource_db_cluster_output_2'),
        {logicalId: "DBCluster", hArgs:{engine: "aurora"}}
      );
    });

    it("sets new DB properties", function() {
      cTests.testParticle(
        "resource",
        "db_cluster",
        require('./fixtures/resource_db_cluster_output_3'),
        {
          logicalId: "DBCluster",
          hArgs:{
            engine: "aurora",
            availabilityZones: '["us-east-1a","us-east-1d"]',
            backupRetentionPeriod: 7,
            databaseName: "dbName",
            dbClusterParameterGroupName: '{"Ref": "ParameterGroup"}',
            dbSubnetGroupName: '{"Ref": "DBSubnetGroup"}',
            engineVersion: "5.6.10a",
            kmsKeyId: "arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef",
            masterUsername: "user",
            masterUserPassword: "password",
            port: "3306",
            preferredBackupWindow: "22:00-22:30",
            preferredMaintenanceWindow: "02:00-02:30",
            storageEncrypted: true,
            tags: [{"Key": "Name", "Value": "test"}],
            vpcSecurityGroupIds: '[{"Ref": "SecurityGroupId"}]'
          }
        }
      );
    });

    it("sets snapshot DB properties", function() {
      cTests.testParticle(
        "resource",
        "db_cluster",
        require('./fixtures/resource_db_cluster_output_4'),
        {
          logicalId: "DBCluster",
          hArgs:{
            engine: "aurora",
            availabilityZones: '["us-east-1a","us-east-1d"]',
            backupRetentionPeriod: 7,
            dbClusterParameterGroupName: '{"Ref": "ParameterGroup"}',
            dbSubnetGroupName: '{"Ref": "DBSubnetGroup"}',
            engineVersion: "5.6.10a",
            port: "3306",
            preferredBackupWindow: "22:00-22:30",
            preferredMaintenanceWindow: "02:00-02:30",
            snapshotIdentifier: '{"Ref": "SnapshotId"}',
            tags: [{"Key": "Name", "Value": "test"}],
            vpcSecurityGroupIds: '[{"Ref": "SecurityGroupId"}]'
          }
        }
      );
    });


  });
});
