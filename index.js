'use strict';

var vertcore = module.exports;

// module information
vertcore.version = 'v' + require('./package.json').version;
vertcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of vertcore-lib found. ' +
      'Please make sure to require vertcore-lib and check that submodules do' +
      ' not also include their own vertcore-lib dependency.';
    throw new Error(message);
  }
};
vertcore.versionGuard(global._vertcore);
global._vertcore = vertcore.version;

// crypto
vertcore.crypto = {};
vertcore.crypto.BN = require('./lib/crypto/bn');
vertcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
vertcore.crypto.Hash = require('./lib/crypto/hash');
vertcore.crypto.Random = require('./lib/crypto/random');
vertcore.crypto.Point = require('./lib/crypto/point');
vertcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
vertcore.encoding = {};
vertcore.encoding.Base58 = require('./lib/encoding/base58');
vertcore.encoding.Base58Check = require('./lib/encoding/base58check');
vertcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
vertcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
vertcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
vertcore.util = {};
vertcore.util.buffer = require('./lib/util/buffer');
vertcore.util.js = require('./lib/util/js');
vertcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
vertcore.errors = require('./lib/errors');

// main vertcoin library
vertcore.Address = require('./lib/address');
vertcore.Block = require('./lib/block');
vertcore.MerkleBlock = require('./lib/block/merkleblock');
vertcore.BlockHeader = require('./lib/block/blockheader');
vertcore.HDPrivateKey = require('./lib/hdprivatekey.js');
vertcore.HDPublicKey = require('./lib/hdpublickey.js');
vertcore.Networks = require('./lib/networks');
vertcore.Opcode = require('./lib/opcode');
vertcore.PrivateKey = require('./lib/privatekey');
vertcore.PublicKey = require('./lib/publickey');
vertcore.Script = require('./lib/script');
vertcore.Transaction = require('./lib/transaction');
vertcore.URI = require('./lib/uri');
vertcore.Unit = require('./lib/unit');

// dependencies, subject to change
vertcore.deps = {};
vertcore.deps.bnjs = require('bn.js');
vertcore.deps.bs58 = require('bs58');
vertcore.deps.Buffer = Buffer;
vertcore.deps.elliptic = require('elliptic');
vertcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
vertcore.Transaction.sighash = require('./lib/transaction/sighash');
