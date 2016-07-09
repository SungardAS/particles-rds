# particles-rds

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]
[![Dependency Status][daviddm-image]][daviddm-url]



## Summary

[Condensation][condensation-url] particles that create AWS RDS resources

## Particles

### cftemplates

#### mysql/multi\_az

#### mysql/read\_replica

### outputs

#### db\_instance/arn

**Parameters**

  * `dbInstanceLogicalId {String}` **required** DBInstance Logical ID

#### db\_instance/endpoint\_address

**Parameters**

  * `dbInstanceLogicalId {String}` **required** DBInstance Logical ID

#### db\_instance/endpoint\_port

**Parameters**

  * `dbInstanceLogicalId {String}` **required** DBInstance Logical ID

#### db\_instance/id

**Parameters**

  * `dbInstanceLogicalId {String}` **required** DBInstance Logical ID

### Parameters

#### db\_instance/allocated\_storage

**Extends** `particles-core` `base`

#### db\_instance/db\_name

**Extends** `particles-core` `base`

#### db\_instance/instance\_class

**Extends** `particles-core` `base`

#### db\_instance/password

**Extends** `particles-core` `base`

#### db\_instance/snapshot\_identifier

**Extends** `particles-core` `base`

#### name\_tag

**Extends** `particles-core` `base`

#### vpc/security\_group\_id

**Extends** `particles-core` `base`

#### vpc/security\_group\_id\_list

**Extends** `particles-core` `base`

#### name\_tag

**Extends** `particles-core` `base`

### resources

#### db\_cluster

**Extends** `particles-core` `base`

**Parameters**

  * `availabilityZones {String}` A list of Availability Zones
  * `backupRetentionPeriod {Integer}` number of days for which automatic backups are retained
  * `databaseName {String}` name of the database
  * `dbClusterParameterGroupName {String}` name of the DB cluster parameter group
  * `dbSubnetGroupName {String}` A DB subnet group
  * `engine {String}` **required** name of the database engine
  * `engineVersion {String}` version number of the database engine
  * `kmsKeyId {String}` ARN of a AWS Key Management Service master key
  * `masterUsername {String}` master user name for the DB instance
  * `masterUserPassword {String}` password for the master database user
  * `port {Integer}` port number that will accept connections
  * `preferredBackupWindow {String}` daily time range in UTC during which you want to create automated backups
  * `preferredMaintenanceWindow {String}` weekly time range (in UTC) during which system maintenance can occur
  * `snapshotIdentifier {String}` identifier for the DB cluster snapshot to restore from
  * `storageEncrypted {Boolean}` whether the DB instances in the cluster are encrypted
  * `tags {Array}` tags to attach to this DB cluster
  * `vpcSecurityGroupIds {Array}` list of VPC security groups


#### db\_instance

**Extends** `particles-core` `base`

**Parameters**

  * `allocatedStorage {String}` storage size specified in gigabytes (GB)
  * `allowMajorVersionUpgrade {Boolean}` whether major version upgrades are allowed
  * `autoMinorVersionUpgrade {Boolean}` minor engine upgrades will be applied automatically
  * `availabilityZone {String}` name of the Availability Zone where the DB instance is located
  * `backupRetentionPeriod {Integer}` number of days for which automatic backups are retained
  * `characterSetName {String}` haracter set to associate with the database instance
  * `dbClusterIdentifier {String}` existing DB cluster that this instance will be associated with
  * `dbInstanceClass {String}` **required** name of the DB cluster parameter group
  * `dbInstanceIdentifier {String}` A name for the DB instance
  * `databaseName {String}` name of the database
  * `dbParameterGroupName {String}` name of the DB parameter group
  * `dbSecurityGroups {Array}` list of the DB security groups
  * `dbSnapshotIdentifier {String}` identifier for the DB snapshot to restore from
  * `dbSubnetGroupName {String}` A DB subnet group
  * `engine {String}` name of the database engine
  * `engineVersion {String}` version number of the database engine
  * `iops {Number}` number of I/O operations per second
  * `kmsKeyId {String}` ARN of a AWS Key Management Service master key
  * `licenseModel {String}` license model information
  * `masterUsername {String}` master user name for the DB instance
  * `masterUserPassword {String}` password for the master database user
  * `multiAZ {Boolean}` if the database instance is a multiple Availability Zone deployment
  * `optionGroupName {String}` option group that this database instance is associated with
  * `port {Integer}` port number that will accept connections
  * `preferredBackupWindow {String}` daily time range in UTC during which you want to create automated backups
  * `preferredMaintenanceWindow {String}` weekly time range (in UTC) during which system maintenance can occur
  * `publiclyAccessible {Boolean}` whether the database instance is an Internet-facing instance
  * `sourceDBInstanceIdentifier {String}` whether a database instance is a read replica
  * `storageEncrypted {Boolean}` whether the DB instances in the cluster are encrypted
  * `tags {Array}` tags to attach to this DB cluster
  * `vpcSecurityGroupIds {Array}` list of VPC security groups

#### db\_subnet\_group

**Extends** `particles-core` `base`

**Parameters**

  * `groupDescription {String}`
  * `subnetIds {Array}`
  * `tags {Array}`

### sets

#### db\_cluster/output\_all

**Parameters**

  * `dbClusterLogicalId {String}` **required** DBCluster Logical ID

#### db\_instance/output\_all

**Parameters**

  * `dbInstanceLogicalId {String}` **required** DBInstance Logical ID

#### mysql/params\_common

#### mysql/params\_multi\_az

#### mysql/params\_multi\_az\_with\_read\_replica

#### mysql/params\_network

#### vpc\_security\_group


## Sungard Availability Services | Labs
[![Sungard Availability Services | Labs][labs-logo]][labs-github-url]

This project is maintained by the Labs team at [Sungard Availability
Services](http://sungardas.com)

GitHub: [https://sungardas.github.io](https://sungardas.github.io)

Blog: [http://blog.sungardas.com/CTOLabs/](http://blog.sungardas.com/CTOLabs/)


[labs-github-url]: https://sungardas.github.io
[labs-logo]: https://raw.githubusercontent.com/SungardAS/repo-assets/master/images/logos/sungardas-labs-logo-small.png
[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://badge.fury.io/js/particles-rds.svg
[npm-url]: https://npmjs.org/package/particles-rds
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[travis-image]: https://travis-ci.org/SungardAS/particles-rds.svg?branch=develop
[travis-url]: https://travis-ci.org/SungardAS/particles-rds
[daviddm-image]: https://david-dm.org/SungardAS/particles-rds.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SungardAS/particles-rds
