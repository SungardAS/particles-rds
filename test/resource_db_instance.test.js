var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("db_instance", function() {

    it("creates an empty db_instance", function() {
      cTests.testParticle(
        "resource",
        "db_instance",
        require('./fixtures/resource_db_instance_output_1'),
        {logicalId: "DBInstance"}
      );
    });

    it("sets engine", function() {
      cTests.testParticle(
        "resource",
        "db_instance",
        require('./fixtures/resource_db_instance_output_2'),
        {logicalId: "DBInstance", hArgs:{engine: "aurora", dbInstanceClass: "db.m4.large"}}
      );
    });

    it("sets new DB properties", function() {
      cTests.testParticle(
        "resource",
        "db_instance",
        require('./fixtures/resource_db_instance_output_3'),
        {
          logicalId: "DBInstance",
          hArgs:{
            engine: "aurora",
            backupRetentionPeriod: 7,
            dbName: "dbName",
            dbInstanceClass: "db.m4.large",
            dbSubnetGroupName: '{"Ref": "DBSubnetGroup"}',
            engineVersion: "5.6.10a",
            kmsKeyId: "arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef",
            masterUsername: "user",
            masterUserPassword: "password",
            port: "3306",
            preferredBackupWindow: "22:00-22:30",
            preferredMaintenanceWindow: "02:00-02:30",
            storageEncrypted: true,
            vpcSecurityGroups:[{"Ref": "SecurityGroup1"}],
            tags: [{"Key": "Name", "Value": "test"}],
          }
        }
      );
    });

    it("sets snapshot DB properties", function() {
      cTests.testParticle(
        "resource",
        "db_instance",
        require('./fixtures/resource_db_instance_output_4'),
        {
          logicalId: "DBInstance",
          hArgs:{
            engine: "aurora",
            backupRetentionPeriod: 7,
            dbInstanceClass: "db.m4.large",
            dbSubnetGroupName: '{"Ref": "DBSubnetGroup"}',
            engineVersion: "5.6.10a",
            port: "3306",
            preferredBackupWindow: "22:00-22:30",
            preferredMaintenanceWindow: "02:00-02:30",
            dbSnapshotIdentifier: '{"Ref": "SnapshotId"}',
            tags: [{"Key": "Name", "Value": "test"}]
          }
        }
      );
    });


  });
});
