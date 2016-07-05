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

#### db\_instance/db\_name

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

#### db\_instance

#### db\_security\_group

#### db\_subnet\_group

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
