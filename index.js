/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const pb = $root.pb = (() => {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    const pb = {};

    pb.Vec2 = (function() {

        /**
         * Properties of a Vec2.
         * @memberof pb
         * @interface IVec2
         * @property {number|null} [x] Vec2 x
         * @property {number|null} [y] Vec2 y
         */

        /**
         * Constructs a new Vec2.
         * @memberof pb
         * @classdesc Represents a Vec2.
         * @implements IVec2
         * @constructor
         * @param {pb.IVec2=} [properties] Properties to set
         */
        function Vec2(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vec2 x.
         * @member {number} x
         * @memberof pb.Vec2
         * @instance
         */
        Vec2.prototype.x = 0;

        /**
         * Vec2 y.
         * @member {number} y
         * @memberof pb.Vec2
         * @instance
         */
        Vec2.prototype.y = 0;

        /**
         * Creates a new Vec2 instance using the specified properties.
         * @function create
         * @memberof pb.Vec2
         * @static
         * @param {pb.IVec2=} [properties] Properties to set
         * @returns {pb.Vec2} Vec2 instance
         */
        Vec2.create = function create(properties) {
            return new Vec2(properties);
        };

        /**
         * Encodes the specified Vec2 message. Does not implicitly {@link pb.Vec2.verify|verify} messages.
         * @function encode
         * @memberof pb.Vec2
         * @static
         * @param {pb.IVec2} message Vec2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };

        /**
         * Encodes the specified Vec2 message, length delimited. Does not implicitly {@link pb.Vec2.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Vec2
         * @static
         * @param {pb.IVec2} message Vec2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Vec2 message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Vec2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Vec2} Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Vec2();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Vec2 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Vec2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Vec2} Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Vec2 message.
         * @function verify
         * @memberof pb.Vec2
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vec2.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a Vec2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Vec2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Vec2} Vec2
         */
        Vec2.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Vec2)
                return object;
            let message = new $root.pb.Vec2();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a Vec2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Vec2
         * @static
         * @param {pb.Vec2} message Vec2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vec2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this Vec2 to JSON.
         * @function toJSON
         * @memberof pb.Vec2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vec2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Vec2
         * @function getTypeUrl
         * @memberof pb.Vec2
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Vec2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Vec2";
        };

        return Vec2;
    })();

    pb.Vec3 = (function() {

        /**
         * Properties of a Vec3.
         * @memberof pb
         * @interface IVec3
         * @property {number|null} [x] Vec3 x
         * @property {number|null} [y] Vec3 y
         * @property {number|null} [z] Vec3 z
         */

        /**
         * Constructs a new Vec3.
         * @memberof pb
         * @classdesc Represents a Vec3.
         * @implements IVec3
         * @constructor
         * @param {pb.IVec3=} [properties] Properties to set
         */
        function Vec3(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vec3 x.
         * @member {number} x
         * @memberof pb.Vec3
         * @instance
         */
        Vec3.prototype.x = 0;

        /**
         * Vec3 y.
         * @member {number} y
         * @memberof pb.Vec3
         * @instance
         */
        Vec3.prototype.y = 0;

        /**
         * Vec3 z.
         * @member {number} z
         * @memberof pb.Vec3
         * @instance
         */
        Vec3.prototype.z = 0;

        /**
         * Creates a new Vec3 instance using the specified properties.
         * @function create
         * @memberof pb.Vec3
         * @static
         * @param {pb.IVec3=} [properties] Properties to set
         * @returns {pb.Vec3} Vec3 instance
         */
        Vec3.create = function create(properties) {
            return new Vec3(properties);
        };

        /**
         * Encodes the specified Vec3 message. Does not implicitly {@link pb.Vec3.verify|verify} messages.
         * @function encode
         * @memberof pb.Vec3
         * @static
         * @param {pb.IVec3} message Vec3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec3.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            return writer;
        };

        /**
         * Encodes the specified Vec3 message, length delimited. Does not implicitly {@link pb.Vec3.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Vec3
         * @static
         * @param {pb.IVec3} message Vec3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec3.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Vec3 message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Vec3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Vec3} Vec3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec3.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Vec3();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Vec3 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Vec3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Vec3} Vec3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec3.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Vec3 message.
         * @function verify
         * @memberof pb.Vec3
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vec3.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };

        /**
         * Creates a Vec3 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Vec3
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Vec3} Vec3
         */
        Vec3.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Vec3)
                return object;
            let message = new $root.pb.Vec3();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };

        /**
         * Creates a plain object from a Vec3 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Vec3
         * @static
         * @param {pb.Vec3} message Vec3
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vec3.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };

        /**
         * Converts this Vec3 to JSON.
         * @function toJSON
         * @memberof pb.Vec3
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vec3.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Vec3
         * @function getTypeUrl
         * @memberof pb.Vec3
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Vec3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Vec3";
        };

        return Vec3;
    })();

    pb.Quat = (function() {

        /**
         * Properties of a Quat.
         * @memberof pb
         * @interface IQuat
         * @property {number|null} [x] Quat x
         * @property {number|null} [y] Quat y
         * @property {number|null} [z] Quat z
         * @property {number|null} [w] Quat w
         */

        /**
         * Constructs a new Quat.
         * @memberof pb
         * @classdesc Represents a Quat.
         * @implements IQuat
         * @constructor
         * @param {pb.IQuat=} [properties] Properties to set
         */
        function Quat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Quat x.
         * @member {number} x
         * @memberof pb.Quat
         * @instance
         */
        Quat.prototype.x = 0;

        /**
         * Quat y.
         * @member {number} y
         * @memberof pb.Quat
         * @instance
         */
        Quat.prototype.y = 0;

        /**
         * Quat z.
         * @member {number} z
         * @memberof pb.Quat
         * @instance
         */
        Quat.prototype.z = 0;

        /**
         * Quat w.
         * @member {number} w
         * @memberof pb.Quat
         * @instance
         */
        Quat.prototype.w = 0;

        /**
         * Creates a new Quat instance using the specified properties.
         * @function create
         * @memberof pb.Quat
         * @static
         * @param {pb.IQuat=} [properties] Properties to set
         * @returns {pb.Quat} Quat instance
         */
        Quat.create = function create(properties) {
            return new Quat(properties);
        };

        /**
         * Encodes the specified Quat message. Does not implicitly {@link pb.Quat.verify|verify} messages.
         * @function encode
         * @memberof pb.Quat
         * @static
         * @param {pb.IQuat} message Quat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            if (message.w != null && Object.hasOwnProperty.call(message, "w"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.w);
            return writer;
        };

        /**
         * Encodes the specified Quat message, length delimited. Does not implicitly {@link pb.Quat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Quat
         * @static
         * @param {pb.IQuat} message Quat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Quat message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Quat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Quat} Quat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Quat();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
                        break;
                    }
                case 4: {
                        message.w = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Quat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Quat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Quat} Quat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Quat message.
         * @function verify
         * @memberof pb.Quat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Quat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.w != null && message.hasOwnProperty("w"))
                if (typeof message.w !== "number")
                    return "w: number expected";
            return null;
        };

        /**
         * Creates a Quat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Quat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Quat} Quat
         */
        Quat.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Quat)
                return object;
            let message = new $root.pb.Quat();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.w != null)
                message.w = Number(object.w);
            return message;
        };

        /**
         * Creates a plain object from a Quat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Quat
         * @static
         * @param {pb.Quat} message Quat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Quat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.w = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
            return object;
        };

        /**
         * Converts this Quat to JSON.
         * @function toJSON
         * @memberof pb.Quat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Quat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Quat
         * @function getTypeUrl
         * @memberof pb.Quat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Quat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Quat";
        };

        return Quat;
    })();

    pb.Color = (function() {

        /**
         * Properties of a Color.
         * @memberof pb
         * @interface IColor
         * @property {number|null} [r] Color r
         * @property {number|null} [g] Color g
         * @property {number|null} [b] Color b
         * @property {number|null} [a] Color a
         */

        /**
         * Constructs a new Color.
         * @memberof pb
         * @classdesc Represents a Color.
         * @implements IColor
         * @constructor
         * @param {pb.IColor=} [properties] Properties to set
         */
        function Color(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Color r.
         * @member {number} r
         * @memberof pb.Color
         * @instance
         */
        Color.prototype.r = 0;

        /**
         * Color g.
         * @member {number} g
         * @memberof pb.Color
         * @instance
         */
        Color.prototype.g = 0;

        /**
         * Color b.
         * @member {number} b
         * @memberof pb.Color
         * @instance
         */
        Color.prototype.b = 0;

        /**
         * Color a.
         * @member {number} a
         * @memberof pb.Color
         * @instance
         */
        Color.prototype.a = 0;

        /**
         * Creates a new Color instance using the specified properties.
         * @function create
         * @memberof pb.Color
         * @static
         * @param {pb.IColor=} [properties] Properties to set
         * @returns {pb.Color} Color instance
         */
        Color.create = function create(properties) {
            return new Color(properties);
        };

        /**
         * Encodes the specified Color message. Does not implicitly {@link pb.Color.verify|verify} messages.
         * @function encode
         * @memberof pb.Color
         * @static
         * @param {pb.IColor} message Color message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Color.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.r != null && Object.hasOwnProperty.call(message, "r"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.r);
            if (message.g != null && Object.hasOwnProperty.call(message, "g"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.g);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.b);
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.a);
            return writer;
        };

        /**
         * Encodes the specified Color message, length delimited. Does not implicitly {@link pb.Color.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Color
         * @static
         * @param {pb.IColor} message Color message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Color.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Color message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Color
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Color} Color
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Color.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Color();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.r = reader.float();
                        break;
                    }
                case 2: {
                        message.g = reader.float();
                        break;
                    }
                case 3: {
                        message.b = reader.float();
                        break;
                    }
                case 4: {
                        message.a = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Color message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Color
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Color} Color
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Color.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Color message.
         * @function verify
         * @memberof pb.Color
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Color.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.r != null && message.hasOwnProperty("r"))
                if (typeof message.r !== "number")
                    return "r: number expected";
            if (message.g != null && message.hasOwnProperty("g"))
                if (typeof message.g !== "number")
                    return "g: number expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (typeof message.b !== "number")
                    return "b: number expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (typeof message.a !== "number")
                    return "a: number expected";
            return null;
        };

        /**
         * Creates a Color message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Color
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Color} Color
         */
        Color.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Color)
                return object;
            let message = new $root.pb.Color();
            if (object.r != null)
                message.r = Number(object.r);
            if (object.g != null)
                message.g = Number(object.g);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.a != null)
                message.a = Number(object.a);
            return message;
        };

        /**
         * Creates a plain object from a Color message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Color
         * @static
         * @param {pb.Color} message Color
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Color.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.r = 0;
                object.g = 0;
                object.b = 0;
                object.a = 0;
            }
            if (message.r != null && message.hasOwnProperty("r"))
                object.r = options.json && !isFinite(message.r) ? String(message.r) : message.r;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            return object;
        };

        /**
         * Converts this Color to JSON.
         * @function toJSON
         * @memberof pb.Color
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Color.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Color
         * @function getTypeUrl
         * @memberof pb.Color
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Color.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Color";
        };

        return Color;
    })();

    pb.Element = (function() {

        /**
         * Properties of an Element.
         * @memberof pb
         * @interface IElement
         * @property {string|null} [name] Element name
         * @property {number|null} [offset] Element offset
         * @property {number|null} [stride] Element stride
         * @property {number|null} [dataType] Element dataType
         * @property {number|null} [numComponents] Element numComponents
         * @property {boolean|null} [normalize] Element normalize
         * @property {number|null} [size] Element size
         * @property {boolean|null} [asInt] Element asInt
         */

        /**
         * Constructs a new Element.
         * @memberof pb
         * @classdesc Represents an Element.
         * @implements IElement
         * @constructor
         * @param {pb.IElement=} [properties] Properties to set
         */
        function Element(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Element name.
         * @member {string} name
         * @memberof pb.Element
         * @instance
         */
        Element.prototype.name = "";

        /**
         * Element offset.
         * @member {number} offset
         * @memberof pb.Element
         * @instance
         */
        Element.prototype.offset = 0;

        /**
         * Element stride.
         * @member {number} stride
         * @memberof pb.Element
         * @instance
         */
        Element.prototype.stride = 0;

        /**
         * Element dataType.
         * @member {number} dataType
         * @memberof pb.Element
         * @instance
         */
        Element.prototype.dataType = 0;

        /**
         * Element numComponents.
         * @member {number} numComponents
         * @memberof pb.Element
         * @instance
         */
        Element.prototype.numComponents = 0;

        /**
         * Element normalize.
         * @member {boolean} normalize
         * @memberof pb.Element
         * @instance
         */
        Element.prototype.normalize = false;

        /**
         * Element size.
         * @member {number} size
         * @memberof pb.Element
         * @instance
         */
        Element.prototype.size = 0;

        /**
         * Element asInt.
         * @member {boolean} asInt
         * @memberof pb.Element
         * @instance
         */
        Element.prototype.asInt = false;

        /**
         * Creates a new Element instance using the specified properties.
         * @function create
         * @memberof pb.Element
         * @static
         * @param {pb.IElement=} [properties] Properties to set
         * @returns {pb.Element} Element instance
         */
        Element.create = function create(properties) {
            return new Element(properties);
        };

        /**
         * Encodes the specified Element message. Does not implicitly {@link pb.Element.verify|verify} messages.
         * @function encode
         * @memberof pb.Element
         * @static
         * @param {pb.IElement} message Element message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Element.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
            if (message.stride != null && Object.hasOwnProperty.call(message, "stride"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.stride);
            if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dataType);
            if (message.numComponents != null && Object.hasOwnProperty.call(message, "numComponents"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.numComponents);
            if (message.normalize != null && Object.hasOwnProperty.call(message, "normalize"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.normalize);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.size);
            if (message.asInt != null && Object.hasOwnProperty.call(message, "asInt"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.asInt);
            return writer;
        };

        /**
         * Encodes the specified Element message, length delimited. Does not implicitly {@link pb.Element.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Element
         * @static
         * @param {pb.IElement} message Element message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Element.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Element message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Element
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Element} Element
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Element.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Element();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.offset = reader.int32();
                        break;
                    }
                case 3: {
                        message.stride = reader.int32();
                        break;
                    }
                case 4: {
                        message.dataType = reader.int32();
                        break;
                    }
                case 5: {
                        message.numComponents = reader.int32();
                        break;
                    }
                case 6: {
                        message.normalize = reader.bool();
                        break;
                    }
                case 7: {
                        message.size = reader.int32();
                        break;
                    }
                case 8: {
                        message.asInt = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Element message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Element
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Element} Element
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Element.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Element message.
         * @function verify
         * @memberof pb.Element
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Element.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            if (message.stride != null && message.hasOwnProperty("stride"))
                if (!$util.isInteger(message.stride))
                    return "stride: integer expected";
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                if (!$util.isInteger(message.dataType))
                    return "dataType: integer expected";
            if (message.numComponents != null && message.hasOwnProperty("numComponents"))
                if (!$util.isInteger(message.numComponents))
                    return "numComponents: integer expected";
            if (message.normalize != null && message.hasOwnProperty("normalize"))
                if (typeof message.normalize !== "boolean")
                    return "normalize: boolean expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.asInt != null && message.hasOwnProperty("asInt"))
                if (typeof message.asInt !== "boolean")
                    return "asInt: boolean expected";
            return null;
        };

        /**
         * Creates an Element message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Element
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Element} Element
         */
        Element.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Element)
                return object;
            let message = new $root.pb.Element();
            if (object.name != null)
                message.name = String(object.name);
            if (object.offset != null)
                message.offset = object.offset | 0;
            if (object.stride != null)
                message.stride = object.stride | 0;
            if (object.dataType != null)
                message.dataType = object.dataType | 0;
            if (object.numComponents != null)
                message.numComponents = object.numComponents | 0;
            if (object.normalize != null)
                message.normalize = Boolean(object.normalize);
            if (object.size != null)
                message.size = object.size | 0;
            if (object.asInt != null)
                message.asInt = Boolean(object.asInt);
            return message;
        };

        /**
         * Creates a plain object from an Element message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Element
         * @static
         * @param {pb.Element} message Element
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Element.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.offset = 0;
                object.stride = 0;
                object.dataType = 0;
                object.numComponents = 0;
                object.normalize = false;
                object.size = 0;
                object.asInt = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            if (message.stride != null && message.hasOwnProperty("stride"))
                object.stride = message.stride;
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                object.dataType = message.dataType;
            if (message.numComponents != null && message.hasOwnProperty("numComponents"))
                object.numComponents = message.numComponents;
            if (message.normalize != null && message.hasOwnProperty("normalize"))
                object.normalize = message.normalize;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.asInt != null && message.hasOwnProperty("asInt"))
                object.asInt = message.asInt;
            return object;
        };

        /**
         * Converts this Element to JSON.
         * @function toJSON
         * @memberof pb.Element
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Element.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Element
         * @function getTypeUrl
         * @memberof pb.Element
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Element.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Element";
        };

        return Element;
    })();

    pb.File = (function() {

        /**
         * Properties of a File.
         * @memberof pb
         * @interface IFile
         * @property {string|null} [url] File url
         */

        /**
         * Constructs a new File.
         * @memberof pb
         * @classdesc Represents a File.
         * @implements IFile
         * @constructor
         * @param {pb.IFile=} [properties] Properties to set
         */
        function File(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * File url.
         * @member {string} url
         * @memberof pb.File
         * @instance
         */
        File.prototype.url = "";

        /**
         * Creates a new File instance using the specified properties.
         * @function create
         * @memberof pb.File
         * @static
         * @param {pb.IFile=} [properties] Properties to set
         * @returns {pb.File} File instance
         */
        File.create = function create(properties) {
            return new File(properties);
        };

        /**
         * Encodes the specified File message. Does not implicitly {@link pb.File.verify|verify} messages.
         * @function encode
         * @memberof pb.File
         * @static
         * @param {pb.IFile} message File message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        File.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link pb.File.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.File
         * @static
         * @param {pb.IFile} message File message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        File.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a File message from the specified reader or buffer.
         * @function decode
         * @memberof pb.File
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.File} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        File.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.File();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.File
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.File} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        File.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a File message.
         * @function verify
         * @memberof pb.File
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        File.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a File message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.File
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.File} File
         */
        File.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.File)
                return object;
            let message = new $root.pb.File();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a File message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.File
         * @static
         * @param {pb.File} message File
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        File.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.url = "";
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this File to JSON.
         * @function toJSON
         * @memberof pb.File
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        File.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for File
         * @function getTypeUrl
         * @memberof pb.File
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        File.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.File";
        };

        return File;
    })();

    pb.Asset = (function() {

        /**
         * Properties of an Asset.
         * @memberof pb
         * @interface IAsset
         * @property {string|null} [name] Asset name
         * @property {pb.IFile|null} [file] Asset file
         * @property {boolean|null} [rgbm] Asset rgbm
         */

        /**
         * Constructs a new Asset.
         * @memberof pb
         * @classdesc Represents an Asset.
         * @implements IAsset
         * @constructor
         * @param {pb.IAsset=} [properties] Properties to set
         */
        function Asset(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Asset name.
         * @member {string} name
         * @memberof pb.Asset
         * @instance
         */
        Asset.prototype.name = "";

        /**
         * Asset file.
         * @member {pb.IFile|null|undefined} file
         * @memberof pb.Asset
         * @instance
         */
        Asset.prototype.file = null;

        /**
         * Asset rgbm.
         * @member {boolean} rgbm
         * @memberof pb.Asset
         * @instance
         */
        Asset.prototype.rgbm = false;

        /**
         * Creates a new Asset instance using the specified properties.
         * @function create
         * @memberof pb.Asset
         * @static
         * @param {pb.IAsset=} [properties] Properties to set
         * @returns {pb.Asset} Asset instance
         */
        Asset.create = function create(properties) {
            return new Asset(properties);
        };

        /**
         * Encodes the specified Asset message. Does not implicitly {@link pb.Asset.verify|verify} messages.
         * @function encode
         * @memberof pb.Asset
         * @static
         * @param {pb.IAsset} message Asset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Asset.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.pb.File.encode(message.file, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.rgbm != null && Object.hasOwnProperty.call(message, "rgbm"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.rgbm);
            return writer;
        };

        /**
         * Encodes the specified Asset message, length delimited. Does not implicitly {@link pb.Asset.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Asset
         * @static
         * @param {pb.IAsset} message Asset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Asset.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Asset message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Asset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Asset} Asset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Asset.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Asset();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.file = $root.pb.File.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.rgbm = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Asset message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Asset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Asset} Asset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Asset.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Asset message.
         * @function verify
         * @memberof pb.Asset
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Asset.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.file != null && message.hasOwnProperty("file")) {
                let error = $root.pb.File.verify(message.file);
                if (error)
                    return "file." + error;
            }
            if (message.rgbm != null && message.hasOwnProperty("rgbm"))
                if (typeof message.rgbm !== "boolean")
                    return "rgbm: boolean expected";
            return null;
        };

        /**
         * Creates an Asset message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Asset
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Asset} Asset
         */
        Asset.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Asset)
                return object;
            let message = new $root.pb.Asset();
            if (object.name != null)
                message.name = String(object.name);
            if (object.file != null) {
                if (typeof object.file !== "object")
                    throw TypeError(".pb.Asset.file: object expected");
                message.file = $root.pb.File.fromObject(object.file);
            }
            if (object.rgbm != null)
                message.rgbm = Boolean(object.rgbm);
            return message;
        };

        /**
         * Creates a plain object from an Asset message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Asset
         * @static
         * @param {pb.Asset} message Asset
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Asset.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.file = null;
                object.rgbm = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.file != null && message.hasOwnProperty("file"))
                object.file = $root.pb.File.toObject(message.file, options);
            if (message.rgbm != null && message.hasOwnProperty("rgbm"))
                object.rgbm = message.rgbm;
            return object;
        };

        /**
         * Converts this Asset to JSON.
         * @function toJSON
         * @memberof pb.Asset
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Asset.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Asset
         * @function getTypeUrl
         * @memberof pb.Asset
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Asset.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Asset";
        };

        return Asset;
    })();

    pb.Material = (function() {

        /**
         * Properties of a Material.
         * @memberof pb
         * @interface IMaterial
         * @property {string|null} [name] Material name
         * @property {Object.<string,pb.IAsset>|null} [assets] Material assets
         * @property {pb.IColor|null} [emissive] Material emissive
         * @property {string|null} [lightMapChannel] Material lightMapChannel
         * @property {number|null} [lightMapUv] Material lightMapUv
         * @property {boolean|null} [useMetalness] Material useMetalness
         * @property {number|null} [aoMapUv] Material aoMapUv
         * @property {number|null} [diffuseMapUv] Material diffuseMapUv
         * @property {pb.IColor|null} [diffuse] Material diffuse
         * @property {pb.IColor|null} [specular] Material specular
         * @property {number|null} [metalness] Material metalness
         * @property {boolean|null} [doubleSided] Material doubleSided
         * @property {pb.IVec2|null} [diffuseMapOffset] Material diffuseMapOffset
         * @property {number|null} [diffuseMapRotation] Material diffuseMapRotation
         * @property {pb.IVec2|null} [diffuseMapTiling] Material diffuseMapTiling
         * @property {pb.IVec2|null} [emissiveMapOffset] Material emissiveMapOffset
         * @property {number|null} [emissiveMapRotation] Material emissiveMapRotation
         * @property {pb.IVec2|null} [emissiveMapTiling] Material emissiveMapTiling
         * @property {pb.IVec2|null} [aoMapOffset] Material aoMapOffset
         * @property {number|null} [aoMapRotation] Material aoMapRotation
         * @property {pb.IVec2|null} [aoMapTiling] Material aoMapTiling
         * @property {pb.IVec2|null} [normalMapOffset] Material normalMapOffset
         * @property {number|null} [normalMapRotation] Material normalMapRotation
         * @property {pb.IVec2|null} [normalMapTiling] Material normalMapTiling
         * @property {pb.IVec2|null} [metalnessMapOffset] Material metalnessMapOffset
         * @property {number|null} [metalnessMapRotation] Material metalnessMapRotation
         * @property {pb.IVec2|null} [metalnessMapTiling] Material metalnessMapTiling
         * @property {number|null} [gloss] Material gloss
         * @property {string|null} [glossMapChannel] Material glossMapChannel
         * @property {string|null} [metalnessMapChannel] Material metalnessMapChannel
         * @property {string|null} [specularMapChannel] Material specularMapChannel
         * @property {boolean|null} [glossInvert] Material glossInvert
         * @property {pb.IColor|null} [ambient] Material ambient
         * @property {number|null} [emissiveIntensity] Material emissiveIntensity
         * @property {number|null} [refractionIndex] Material refractionIndex
         */

        /**
         * Constructs a new Material.
         * @memberof pb
         * @classdesc Represents a Material.
         * @implements IMaterial
         * @constructor
         * @param {pb.IMaterial=} [properties] Properties to set
         */
        function Material(properties) {
            this.assets = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Material name.
         * @member {string} name
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.name = "";

        /**
         * Material assets.
         * @member {Object.<string,pb.IAsset>} assets
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.assets = $util.emptyObject;

        /**
         * Material emissive.
         * @member {pb.IColor|null|undefined} emissive
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.emissive = null;

        /**
         * Material lightMapChannel.
         * @member {string} lightMapChannel
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.lightMapChannel = "";

        /**
         * Material lightMapUv.
         * @member {number} lightMapUv
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.lightMapUv = 0;

        /**
         * Material useMetalness.
         * @member {boolean} useMetalness
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.useMetalness = false;

        /**
         * Material aoMapUv.
         * @member {number} aoMapUv
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.aoMapUv = 0;

        /**
         * Material diffuseMapUv.
         * @member {number} diffuseMapUv
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.diffuseMapUv = 0;

        /**
         * Material diffuse.
         * @member {pb.IColor|null|undefined} diffuse
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.diffuse = null;

        /**
         * Material specular.
         * @member {pb.IColor|null|undefined} specular
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.specular = null;

        /**
         * Material metalness.
         * @member {number} metalness
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.metalness = 0;

        /**
         * Material doubleSided.
         * @member {boolean} doubleSided
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.doubleSided = false;

        /**
         * Material diffuseMapOffset.
         * @member {pb.IVec2|null|undefined} diffuseMapOffset
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.diffuseMapOffset = null;

        /**
         * Material diffuseMapRotation.
         * @member {number} diffuseMapRotation
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.diffuseMapRotation = 0;

        /**
         * Material diffuseMapTiling.
         * @member {pb.IVec2|null|undefined} diffuseMapTiling
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.diffuseMapTiling = null;

        /**
         * Material emissiveMapOffset.
         * @member {pb.IVec2|null|undefined} emissiveMapOffset
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.emissiveMapOffset = null;

        /**
         * Material emissiveMapRotation.
         * @member {number} emissiveMapRotation
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.emissiveMapRotation = 0;

        /**
         * Material emissiveMapTiling.
         * @member {pb.IVec2|null|undefined} emissiveMapTiling
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.emissiveMapTiling = null;

        /**
         * Material aoMapOffset.
         * @member {pb.IVec2|null|undefined} aoMapOffset
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.aoMapOffset = null;

        /**
         * Material aoMapRotation.
         * @member {number} aoMapRotation
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.aoMapRotation = 0;

        /**
         * Material aoMapTiling.
         * @member {pb.IVec2|null|undefined} aoMapTiling
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.aoMapTiling = null;

        /**
         * Material normalMapOffset.
         * @member {pb.IVec2|null|undefined} normalMapOffset
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.normalMapOffset = null;

        /**
         * Material normalMapRotation.
         * @member {number} normalMapRotation
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.normalMapRotation = 0;

        /**
         * Material normalMapTiling.
         * @member {pb.IVec2|null|undefined} normalMapTiling
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.normalMapTiling = null;

        /**
         * Material metalnessMapOffset.
         * @member {pb.IVec2|null|undefined} metalnessMapOffset
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.metalnessMapOffset = null;

        /**
         * Material metalnessMapRotation.
         * @member {number} metalnessMapRotation
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.metalnessMapRotation = 0;

        /**
         * Material metalnessMapTiling.
         * @member {pb.IVec2|null|undefined} metalnessMapTiling
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.metalnessMapTiling = null;

        /**
         * Material gloss.
         * @member {number} gloss
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.gloss = 0;

        /**
         * Material glossMapChannel.
         * @member {string} glossMapChannel
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.glossMapChannel = "";

        /**
         * Material metalnessMapChannel.
         * @member {string} metalnessMapChannel
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.metalnessMapChannel = "";

        /**
         * Material specularMapChannel.
         * @member {string} specularMapChannel
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.specularMapChannel = "";

        /**
         * Material glossInvert.
         * @member {boolean} glossInvert
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.glossInvert = false;

        /**
         * Material ambient.
         * @member {pb.IColor|null|undefined} ambient
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.ambient = null;

        /**
         * Material emissiveIntensity.
         * @member {number} emissiveIntensity
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.emissiveIntensity = 0;

        /**
         * Material refractionIndex.
         * @member {number} refractionIndex
         * @memberof pb.Material
         * @instance
         */
        Material.prototype.refractionIndex = 0;

        /**
         * Creates a new Material instance using the specified properties.
         * @function create
         * @memberof pb.Material
         * @static
         * @param {pb.IMaterial=} [properties] Properties to set
         * @returns {pb.Material} Material instance
         */
        Material.create = function create(properties) {
            return new Material(properties);
        };

        /**
         * Encodes the specified Material message. Does not implicitly {@link pb.Material.verify|verify} messages.
         * @function encode
         * @memberof pb.Material
         * @static
         * @param {pb.IMaterial} message Material message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Material.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.assets != null && Object.hasOwnProperty.call(message, "assets"))
                for (let keys = Object.keys(message.assets), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.pb.Asset.encode(message.assets[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.emissive != null && Object.hasOwnProperty.call(message, "emissive"))
                $root.pb.Color.encode(message.emissive, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.lightMapChannel != null && Object.hasOwnProperty.call(message, "lightMapChannel"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lightMapChannel);
            if (message.lightMapUv != null && Object.hasOwnProperty.call(message, "lightMapUv"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.lightMapUv);
            if (message.useMetalness != null && Object.hasOwnProperty.call(message, "useMetalness"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.useMetalness);
            if (message.aoMapUv != null && Object.hasOwnProperty.call(message, "aoMapUv"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.aoMapUv);
            if (message.diffuseMapUv != null && Object.hasOwnProperty.call(message, "diffuseMapUv"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.diffuseMapUv);
            if (message.diffuse != null && Object.hasOwnProperty.call(message, "diffuse"))
                $root.pb.Color.encode(message.diffuse, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.specular != null && Object.hasOwnProperty.call(message, "specular"))
                $root.pb.Color.encode(message.specular, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.metalness != null && Object.hasOwnProperty.call(message, "metalness"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.metalness);
            if (message.doubleSided != null && Object.hasOwnProperty.call(message, "doubleSided"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.doubleSided);
            if (message.diffuseMapOffset != null && Object.hasOwnProperty.call(message, "diffuseMapOffset"))
                $root.pb.Vec2.encode(message.diffuseMapOffset, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.diffuseMapRotation != null && Object.hasOwnProperty.call(message, "diffuseMapRotation"))
                writer.uint32(/* id 14, wireType 5 =*/117).float(message.diffuseMapRotation);
            if (message.diffuseMapTiling != null && Object.hasOwnProperty.call(message, "diffuseMapTiling"))
                $root.pb.Vec2.encode(message.diffuseMapTiling, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.emissiveMapOffset != null && Object.hasOwnProperty.call(message, "emissiveMapOffset"))
                $root.pb.Vec2.encode(message.emissiveMapOffset, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.emissiveMapRotation != null && Object.hasOwnProperty.call(message, "emissiveMapRotation"))
                writer.uint32(/* id 17, wireType 5 =*/141).float(message.emissiveMapRotation);
            if (message.emissiveMapTiling != null && Object.hasOwnProperty.call(message, "emissiveMapTiling"))
                $root.pb.Vec2.encode(message.emissiveMapTiling, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.aoMapOffset != null && Object.hasOwnProperty.call(message, "aoMapOffset"))
                $root.pb.Vec2.encode(message.aoMapOffset, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.aoMapRotation != null && Object.hasOwnProperty.call(message, "aoMapRotation"))
                writer.uint32(/* id 20, wireType 5 =*/165).float(message.aoMapRotation);
            if (message.aoMapTiling != null && Object.hasOwnProperty.call(message, "aoMapTiling"))
                $root.pb.Vec2.encode(message.aoMapTiling, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.normalMapOffset != null && Object.hasOwnProperty.call(message, "normalMapOffset"))
                $root.pb.Vec2.encode(message.normalMapOffset, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.normalMapRotation != null && Object.hasOwnProperty.call(message, "normalMapRotation"))
                writer.uint32(/* id 23, wireType 5 =*/189).float(message.normalMapRotation);
            if (message.normalMapTiling != null && Object.hasOwnProperty.call(message, "normalMapTiling"))
                $root.pb.Vec2.encode(message.normalMapTiling, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.metalnessMapOffset != null && Object.hasOwnProperty.call(message, "metalnessMapOffset"))
                $root.pb.Vec2.encode(message.metalnessMapOffset, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.metalnessMapRotation != null && Object.hasOwnProperty.call(message, "metalnessMapRotation"))
                writer.uint32(/* id 26, wireType 5 =*/213).float(message.metalnessMapRotation);
            if (message.metalnessMapTiling != null && Object.hasOwnProperty.call(message, "metalnessMapTiling"))
                $root.pb.Vec2.encode(message.metalnessMapTiling, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.gloss != null && Object.hasOwnProperty.call(message, "gloss"))
                writer.uint32(/* id 28, wireType 5 =*/229).float(message.gloss);
            if (message.glossMapChannel != null && Object.hasOwnProperty.call(message, "glossMapChannel"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.glossMapChannel);
            if (message.metalnessMapChannel != null && Object.hasOwnProperty.call(message, "metalnessMapChannel"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.metalnessMapChannel);
            if (message.specularMapChannel != null && Object.hasOwnProperty.call(message, "specularMapChannel"))
                writer.uint32(/* id 31, wireType 2 =*/250).string(message.specularMapChannel);
            if (message.glossInvert != null && Object.hasOwnProperty.call(message, "glossInvert"))
                writer.uint32(/* id 32, wireType 0 =*/256).bool(message.glossInvert);
            if (message.ambient != null && Object.hasOwnProperty.call(message, "ambient"))
                $root.pb.Color.encode(message.ambient, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
            if (message.emissiveIntensity != null && Object.hasOwnProperty.call(message, "emissiveIntensity"))
                writer.uint32(/* id 34, wireType 5 =*/277).float(message.emissiveIntensity);
            if (message.refractionIndex != null && Object.hasOwnProperty.call(message, "refractionIndex"))
                writer.uint32(/* id 35, wireType 5 =*/285).float(message.refractionIndex);
            return writer;
        };

        /**
         * Encodes the specified Material message, length delimited. Does not implicitly {@link pb.Material.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Material
         * @static
         * @param {pb.IMaterial} message Material message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Material.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Material message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Material
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Material} Material
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Material.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Material(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (message.assets === $util.emptyObject)
                            message.assets = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.pb.Asset.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.assets[key] = value;
                        break;
                    }
                case 3: {
                        message.emissive = $root.pb.Color.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.lightMapChannel = reader.string();
                        break;
                    }
                case 5: {
                        message.lightMapUv = reader.int32();
                        break;
                    }
                case 6: {
                        message.useMetalness = reader.bool();
                        break;
                    }
                case 7: {
                        message.aoMapUv = reader.int32();
                        break;
                    }
                case 8: {
                        message.diffuseMapUv = reader.int32();
                        break;
                    }
                case 9: {
                        message.diffuse = $root.pb.Color.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.specular = $root.pb.Color.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.metalness = reader.float();
                        break;
                    }
                case 12: {
                        message.doubleSided = reader.bool();
                        break;
                    }
                case 13: {
                        message.diffuseMapOffset = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.diffuseMapRotation = reader.float();
                        break;
                    }
                case 15: {
                        message.diffuseMapTiling = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.emissiveMapOffset = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.emissiveMapRotation = reader.float();
                        break;
                    }
                case 18: {
                        message.emissiveMapTiling = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.aoMapOffset = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.aoMapRotation = reader.float();
                        break;
                    }
                case 21: {
                        message.aoMapTiling = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.normalMapOffset = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.normalMapRotation = reader.float();
                        break;
                    }
                case 24: {
                        message.normalMapTiling = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 25: {
                        message.metalnessMapOffset = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 26: {
                        message.metalnessMapRotation = reader.float();
                        break;
                    }
                case 27: {
                        message.metalnessMapTiling = $root.pb.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                case 28: {
                        message.gloss = reader.float();
                        break;
                    }
                case 29: {
                        message.glossMapChannel = reader.string();
                        break;
                    }
                case 30: {
                        message.metalnessMapChannel = reader.string();
                        break;
                    }
                case 31: {
                        message.specularMapChannel = reader.string();
                        break;
                    }
                case 32: {
                        message.glossInvert = reader.bool();
                        break;
                    }
                case 33: {
                        message.ambient = $root.pb.Color.decode(reader, reader.uint32());
                        break;
                    }
                case 34: {
                        message.emissiveIntensity = reader.float();
                        break;
                    }
                case 35: {
                        message.refractionIndex = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Material message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Material
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Material} Material
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Material.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Material message.
         * @function verify
         * @memberof pb.Material
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Material.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.assets != null && message.hasOwnProperty("assets")) {
                if (!$util.isObject(message.assets))
                    return "assets: object expected";
                let key = Object.keys(message.assets);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.pb.Asset.verify(message.assets[key[i]]);
                    if (error)
                        return "assets." + error;
                }
            }
            if (message.emissive != null && message.hasOwnProperty("emissive")) {
                let error = $root.pb.Color.verify(message.emissive);
                if (error)
                    return "emissive." + error;
            }
            if (message.lightMapChannel != null && message.hasOwnProperty("lightMapChannel"))
                if (!$util.isString(message.lightMapChannel))
                    return "lightMapChannel: string expected";
            if (message.lightMapUv != null && message.hasOwnProperty("lightMapUv"))
                if (!$util.isInteger(message.lightMapUv))
                    return "lightMapUv: integer expected";
            if (message.useMetalness != null && message.hasOwnProperty("useMetalness"))
                if (typeof message.useMetalness !== "boolean")
                    return "useMetalness: boolean expected";
            if (message.aoMapUv != null && message.hasOwnProperty("aoMapUv"))
                if (!$util.isInteger(message.aoMapUv))
                    return "aoMapUv: integer expected";
            if (message.diffuseMapUv != null && message.hasOwnProperty("diffuseMapUv"))
                if (!$util.isInteger(message.diffuseMapUv))
                    return "diffuseMapUv: integer expected";
            if (message.diffuse != null && message.hasOwnProperty("diffuse")) {
                let error = $root.pb.Color.verify(message.diffuse);
                if (error)
                    return "diffuse." + error;
            }
            if (message.specular != null && message.hasOwnProperty("specular")) {
                let error = $root.pb.Color.verify(message.specular);
                if (error)
                    return "specular." + error;
            }
            if (message.metalness != null && message.hasOwnProperty("metalness"))
                if (typeof message.metalness !== "number")
                    return "metalness: number expected";
            if (message.doubleSided != null && message.hasOwnProperty("doubleSided"))
                if (typeof message.doubleSided !== "boolean")
                    return "doubleSided: boolean expected";
            if (message.diffuseMapOffset != null && message.hasOwnProperty("diffuseMapOffset")) {
                let error = $root.pb.Vec2.verify(message.diffuseMapOffset);
                if (error)
                    return "diffuseMapOffset." + error;
            }
            if (message.diffuseMapRotation != null && message.hasOwnProperty("diffuseMapRotation"))
                if (typeof message.diffuseMapRotation !== "number")
                    return "diffuseMapRotation: number expected";
            if (message.diffuseMapTiling != null && message.hasOwnProperty("diffuseMapTiling")) {
                let error = $root.pb.Vec2.verify(message.diffuseMapTiling);
                if (error)
                    return "diffuseMapTiling." + error;
            }
            if (message.emissiveMapOffset != null && message.hasOwnProperty("emissiveMapOffset")) {
                let error = $root.pb.Vec2.verify(message.emissiveMapOffset);
                if (error)
                    return "emissiveMapOffset." + error;
            }
            if (message.emissiveMapRotation != null && message.hasOwnProperty("emissiveMapRotation"))
                if (typeof message.emissiveMapRotation !== "number")
                    return "emissiveMapRotation: number expected";
            if (message.emissiveMapTiling != null && message.hasOwnProperty("emissiveMapTiling")) {
                let error = $root.pb.Vec2.verify(message.emissiveMapTiling);
                if (error)
                    return "emissiveMapTiling." + error;
            }
            if (message.aoMapOffset != null && message.hasOwnProperty("aoMapOffset")) {
                let error = $root.pb.Vec2.verify(message.aoMapOffset);
                if (error)
                    return "aoMapOffset." + error;
            }
            if (message.aoMapRotation != null && message.hasOwnProperty("aoMapRotation"))
                if (typeof message.aoMapRotation !== "number")
                    return "aoMapRotation: number expected";
            if (message.aoMapTiling != null && message.hasOwnProperty("aoMapTiling")) {
                let error = $root.pb.Vec2.verify(message.aoMapTiling);
                if (error)
                    return "aoMapTiling." + error;
            }
            if (message.normalMapOffset != null && message.hasOwnProperty("normalMapOffset")) {
                let error = $root.pb.Vec2.verify(message.normalMapOffset);
                if (error)
                    return "normalMapOffset." + error;
            }
            if (message.normalMapRotation != null && message.hasOwnProperty("normalMapRotation"))
                if (typeof message.normalMapRotation !== "number")
                    return "normalMapRotation: number expected";
            if (message.normalMapTiling != null && message.hasOwnProperty("normalMapTiling")) {
                let error = $root.pb.Vec2.verify(message.normalMapTiling);
                if (error)
                    return "normalMapTiling." + error;
            }
            if (message.metalnessMapOffset != null && message.hasOwnProperty("metalnessMapOffset")) {
                let error = $root.pb.Vec2.verify(message.metalnessMapOffset);
                if (error)
                    return "metalnessMapOffset." + error;
            }
            if (message.metalnessMapRotation != null && message.hasOwnProperty("metalnessMapRotation"))
                if (typeof message.metalnessMapRotation !== "number")
                    return "metalnessMapRotation: number expected";
            if (message.metalnessMapTiling != null && message.hasOwnProperty("metalnessMapTiling")) {
                let error = $root.pb.Vec2.verify(message.metalnessMapTiling);
                if (error)
                    return "metalnessMapTiling." + error;
            }
            if (message.gloss != null && message.hasOwnProperty("gloss"))
                if (typeof message.gloss !== "number")
                    return "gloss: number expected";
            if (message.glossMapChannel != null && message.hasOwnProperty("glossMapChannel"))
                if (!$util.isString(message.glossMapChannel))
                    return "glossMapChannel: string expected";
            if (message.metalnessMapChannel != null && message.hasOwnProperty("metalnessMapChannel"))
                if (!$util.isString(message.metalnessMapChannel))
                    return "metalnessMapChannel: string expected";
            if (message.specularMapChannel != null && message.hasOwnProperty("specularMapChannel"))
                if (!$util.isString(message.specularMapChannel))
                    return "specularMapChannel: string expected";
            if (message.glossInvert != null && message.hasOwnProperty("glossInvert"))
                if (typeof message.glossInvert !== "boolean")
                    return "glossInvert: boolean expected";
            if (message.ambient != null && message.hasOwnProperty("ambient")) {
                let error = $root.pb.Color.verify(message.ambient);
                if (error)
                    return "ambient." + error;
            }
            if (message.emissiveIntensity != null && message.hasOwnProperty("emissiveIntensity"))
                if (typeof message.emissiveIntensity !== "number")
                    return "emissiveIntensity: number expected";
            if (message.refractionIndex != null && message.hasOwnProperty("refractionIndex"))
                if (typeof message.refractionIndex !== "number")
                    return "refractionIndex: number expected";
            return null;
        };

        /**
         * Creates a Material message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Material
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Material} Material
         */
        Material.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Material)
                return object;
            let message = new $root.pb.Material();
            if (object.name != null)
                message.name = String(object.name);
            if (object.assets) {
                if (typeof object.assets !== "object")
                    throw TypeError(".pb.Material.assets: object expected");
                message.assets = {};
                for (let keys = Object.keys(object.assets), i = 0; i < keys.length; ++i) {
                    if (typeof object.assets[keys[i]] !== "object")
                        throw TypeError(".pb.Material.assets: object expected");
                    message.assets[keys[i]] = $root.pb.Asset.fromObject(object.assets[keys[i]]);
                }
            }
            if (object.emissive != null) {
                if (typeof object.emissive !== "object")
                    throw TypeError(".pb.Material.emissive: object expected");
                message.emissive = $root.pb.Color.fromObject(object.emissive);
            }
            if (object.lightMapChannel != null)
                message.lightMapChannel = String(object.lightMapChannel);
            if (object.lightMapUv != null)
                message.lightMapUv = object.lightMapUv | 0;
            if (object.useMetalness != null)
                message.useMetalness = Boolean(object.useMetalness);
            if (object.aoMapUv != null)
                message.aoMapUv = object.aoMapUv | 0;
            if (object.diffuseMapUv != null)
                message.diffuseMapUv = object.diffuseMapUv | 0;
            if (object.diffuse != null) {
                if (typeof object.diffuse !== "object")
                    throw TypeError(".pb.Material.diffuse: object expected");
                message.diffuse = $root.pb.Color.fromObject(object.diffuse);
            }
            if (object.specular != null) {
                if (typeof object.specular !== "object")
                    throw TypeError(".pb.Material.specular: object expected");
                message.specular = $root.pb.Color.fromObject(object.specular);
            }
            if (object.metalness != null)
                message.metalness = Number(object.metalness);
            if (object.doubleSided != null)
                message.doubleSided = Boolean(object.doubleSided);
            if (object.diffuseMapOffset != null) {
                if (typeof object.diffuseMapOffset !== "object")
                    throw TypeError(".pb.Material.diffuseMapOffset: object expected");
                message.diffuseMapOffset = $root.pb.Vec2.fromObject(object.diffuseMapOffset);
            }
            if (object.diffuseMapRotation != null)
                message.diffuseMapRotation = Number(object.diffuseMapRotation);
            if (object.diffuseMapTiling != null) {
                if (typeof object.diffuseMapTiling !== "object")
                    throw TypeError(".pb.Material.diffuseMapTiling: object expected");
                message.diffuseMapTiling = $root.pb.Vec2.fromObject(object.diffuseMapTiling);
            }
            if (object.emissiveMapOffset != null) {
                if (typeof object.emissiveMapOffset !== "object")
                    throw TypeError(".pb.Material.emissiveMapOffset: object expected");
                message.emissiveMapOffset = $root.pb.Vec2.fromObject(object.emissiveMapOffset);
            }
            if (object.emissiveMapRotation != null)
                message.emissiveMapRotation = Number(object.emissiveMapRotation);
            if (object.emissiveMapTiling != null) {
                if (typeof object.emissiveMapTiling !== "object")
                    throw TypeError(".pb.Material.emissiveMapTiling: object expected");
                message.emissiveMapTiling = $root.pb.Vec2.fromObject(object.emissiveMapTiling);
            }
            if (object.aoMapOffset != null) {
                if (typeof object.aoMapOffset !== "object")
                    throw TypeError(".pb.Material.aoMapOffset: object expected");
                message.aoMapOffset = $root.pb.Vec2.fromObject(object.aoMapOffset);
            }
            if (object.aoMapRotation != null)
                message.aoMapRotation = Number(object.aoMapRotation);
            if (object.aoMapTiling != null) {
                if (typeof object.aoMapTiling !== "object")
                    throw TypeError(".pb.Material.aoMapTiling: object expected");
                message.aoMapTiling = $root.pb.Vec2.fromObject(object.aoMapTiling);
            }
            if (object.normalMapOffset != null) {
                if (typeof object.normalMapOffset !== "object")
                    throw TypeError(".pb.Material.normalMapOffset: object expected");
                message.normalMapOffset = $root.pb.Vec2.fromObject(object.normalMapOffset);
            }
            if (object.normalMapRotation != null)
                message.normalMapRotation = Number(object.normalMapRotation);
            if (object.normalMapTiling != null) {
                if (typeof object.normalMapTiling !== "object")
                    throw TypeError(".pb.Material.normalMapTiling: object expected");
                message.normalMapTiling = $root.pb.Vec2.fromObject(object.normalMapTiling);
            }
            if (object.metalnessMapOffset != null) {
                if (typeof object.metalnessMapOffset !== "object")
                    throw TypeError(".pb.Material.metalnessMapOffset: object expected");
                message.metalnessMapOffset = $root.pb.Vec2.fromObject(object.metalnessMapOffset);
            }
            if (object.metalnessMapRotation != null)
                message.metalnessMapRotation = Number(object.metalnessMapRotation);
            if (object.metalnessMapTiling != null) {
                if (typeof object.metalnessMapTiling !== "object")
                    throw TypeError(".pb.Material.metalnessMapTiling: object expected");
                message.metalnessMapTiling = $root.pb.Vec2.fromObject(object.metalnessMapTiling);
            }
            if (object.gloss != null)
                message.gloss = Number(object.gloss);
            if (object.glossMapChannel != null)
                message.glossMapChannel = String(object.glossMapChannel);
            if (object.metalnessMapChannel != null)
                message.metalnessMapChannel = String(object.metalnessMapChannel);
            if (object.specularMapChannel != null)
                message.specularMapChannel = String(object.specularMapChannel);
            if (object.glossInvert != null)
                message.glossInvert = Boolean(object.glossInvert);
            if (object.ambient != null) {
                if (typeof object.ambient !== "object")
                    throw TypeError(".pb.Material.ambient: object expected");
                message.ambient = $root.pb.Color.fromObject(object.ambient);
            }
            if (object.emissiveIntensity != null)
                message.emissiveIntensity = Number(object.emissiveIntensity);
            if (object.refractionIndex != null)
                message.refractionIndex = Number(object.refractionIndex);
            return message;
        };

        /**
         * Creates a plain object from a Material message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Material
         * @static
         * @param {pb.Material} message Material
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Material.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.assets = {};
            if (options.defaults) {
                object.name = "";
                object.emissive = null;
                object.lightMapChannel = "";
                object.lightMapUv = 0;
                object.useMetalness = false;
                object.aoMapUv = 0;
                object.diffuseMapUv = 0;
                object.diffuse = null;
                object.specular = null;
                object.metalness = 0;
                object.doubleSided = false;
                object.diffuseMapOffset = null;
                object.diffuseMapRotation = 0;
                object.diffuseMapTiling = null;
                object.emissiveMapOffset = null;
                object.emissiveMapRotation = 0;
                object.emissiveMapTiling = null;
                object.aoMapOffset = null;
                object.aoMapRotation = 0;
                object.aoMapTiling = null;
                object.normalMapOffset = null;
                object.normalMapRotation = 0;
                object.normalMapTiling = null;
                object.metalnessMapOffset = null;
                object.metalnessMapRotation = 0;
                object.metalnessMapTiling = null;
                object.gloss = 0;
                object.glossMapChannel = "";
                object.metalnessMapChannel = "";
                object.specularMapChannel = "";
                object.glossInvert = false;
                object.ambient = null;
                object.emissiveIntensity = 0;
                object.refractionIndex = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            let keys2;
            if (message.assets && (keys2 = Object.keys(message.assets)).length) {
                object.assets = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.assets[keys2[j]] = $root.pb.Asset.toObject(message.assets[keys2[j]], options);
            }
            if (message.emissive != null && message.hasOwnProperty("emissive"))
                object.emissive = $root.pb.Color.toObject(message.emissive, options);
            if (message.lightMapChannel != null && message.hasOwnProperty("lightMapChannel"))
                object.lightMapChannel = message.lightMapChannel;
            if (message.lightMapUv != null && message.hasOwnProperty("lightMapUv"))
                object.lightMapUv = message.lightMapUv;
            if (message.useMetalness != null && message.hasOwnProperty("useMetalness"))
                object.useMetalness = message.useMetalness;
            if (message.aoMapUv != null && message.hasOwnProperty("aoMapUv"))
                object.aoMapUv = message.aoMapUv;
            if (message.diffuseMapUv != null && message.hasOwnProperty("diffuseMapUv"))
                object.diffuseMapUv = message.diffuseMapUv;
            if (message.diffuse != null && message.hasOwnProperty("diffuse"))
                object.diffuse = $root.pb.Color.toObject(message.diffuse, options);
            if (message.specular != null && message.hasOwnProperty("specular"))
                object.specular = $root.pb.Color.toObject(message.specular, options);
            if (message.metalness != null && message.hasOwnProperty("metalness"))
                object.metalness = options.json && !isFinite(message.metalness) ? String(message.metalness) : message.metalness;
            if (message.doubleSided != null && message.hasOwnProperty("doubleSided"))
                object.doubleSided = message.doubleSided;
            if (message.diffuseMapOffset != null && message.hasOwnProperty("diffuseMapOffset"))
                object.diffuseMapOffset = $root.pb.Vec2.toObject(message.diffuseMapOffset, options);
            if (message.diffuseMapRotation != null && message.hasOwnProperty("diffuseMapRotation"))
                object.diffuseMapRotation = options.json && !isFinite(message.diffuseMapRotation) ? String(message.diffuseMapRotation) : message.diffuseMapRotation;
            if (message.diffuseMapTiling != null && message.hasOwnProperty("diffuseMapTiling"))
                object.diffuseMapTiling = $root.pb.Vec2.toObject(message.diffuseMapTiling, options);
            if (message.emissiveMapOffset != null && message.hasOwnProperty("emissiveMapOffset"))
                object.emissiveMapOffset = $root.pb.Vec2.toObject(message.emissiveMapOffset, options);
            if (message.emissiveMapRotation != null && message.hasOwnProperty("emissiveMapRotation"))
                object.emissiveMapRotation = options.json && !isFinite(message.emissiveMapRotation) ? String(message.emissiveMapRotation) : message.emissiveMapRotation;
            if (message.emissiveMapTiling != null && message.hasOwnProperty("emissiveMapTiling"))
                object.emissiveMapTiling = $root.pb.Vec2.toObject(message.emissiveMapTiling, options);
            if (message.aoMapOffset != null && message.hasOwnProperty("aoMapOffset"))
                object.aoMapOffset = $root.pb.Vec2.toObject(message.aoMapOffset, options);
            if (message.aoMapRotation != null && message.hasOwnProperty("aoMapRotation"))
                object.aoMapRotation = options.json && !isFinite(message.aoMapRotation) ? String(message.aoMapRotation) : message.aoMapRotation;
            if (message.aoMapTiling != null && message.hasOwnProperty("aoMapTiling"))
                object.aoMapTiling = $root.pb.Vec2.toObject(message.aoMapTiling, options);
            if (message.normalMapOffset != null && message.hasOwnProperty("normalMapOffset"))
                object.normalMapOffset = $root.pb.Vec2.toObject(message.normalMapOffset, options);
            if (message.normalMapRotation != null && message.hasOwnProperty("normalMapRotation"))
                object.normalMapRotation = options.json && !isFinite(message.normalMapRotation) ? String(message.normalMapRotation) : message.normalMapRotation;
            if (message.normalMapTiling != null && message.hasOwnProperty("normalMapTiling"))
                object.normalMapTiling = $root.pb.Vec2.toObject(message.normalMapTiling, options);
            if (message.metalnessMapOffset != null && message.hasOwnProperty("metalnessMapOffset"))
                object.metalnessMapOffset = $root.pb.Vec2.toObject(message.metalnessMapOffset, options);
            if (message.metalnessMapRotation != null && message.hasOwnProperty("metalnessMapRotation"))
                object.metalnessMapRotation = options.json && !isFinite(message.metalnessMapRotation) ? String(message.metalnessMapRotation) : message.metalnessMapRotation;
            if (message.metalnessMapTiling != null && message.hasOwnProperty("metalnessMapTiling"))
                object.metalnessMapTiling = $root.pb.Vec2.toObject(message.metalnessMapTiling, options);
            if (message.gloss != null && message.hasOwnProperty("gloss"))
                object.gloss = options.json && !isFinite(message.gloss) ? String(message.gloss) : message.gloss;
            if (message.glossMapChannel != null && message.hasOwnProperty("glossMapChannel"))
                object.glossMapChannel = message.glossMapChannel;
            if (message.metalnessMapChannel != null && message.hasOwnProperty("metalnessMapChannel"))
                object.metalnessMapChannel = message.metalnessMapChannel;
            if (message.specularMapChannel != null && message.hasOwnProperty("specularMapChannel"))
                object.specularMapChannel = message.specularMapChannel;
            if (message.glossInvert != null && message.hasOwnProperty("glossInvert"))
                object.glossInvert = message.glossInvert;
            if (message.ambient != null && message.hasOwnProperty("ambient"))
                object.ambient = $root.pb.Color.toObject(message.ambient, options);
            if (message.emissiveIntensity != null && message.hasOwnProperty("emissiveIntensity"))
                object.emissiveIntensity = options.json && !isFinite(message.emissiveIntensity) ? String(message.emissiveIntensity) : message.emissiveIntensity;
            if (message.refractionIndex != null && message.hasOwnProperty("refractionIndex"))
                object.refractionIndex = options.json && !isFinite(message.refractionIndex) ? String(message.refractionIndex) : message.refractionIndex;
            return object;
        };

        /**
         * Converts this Material to JSON.
         * @function toJSON
         * @memberof pb.Material
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Material.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Material
         * @function getTypeUrl
         * @memberof pb.Material
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Material.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Material";
        };

        return Material;
    })();

    pb.Mesh = (function() {

        /**
         * Properties of a Mesh.
         * @memberof pb
         * @interface IMesh
         * @property {Uint8Array|null} [vertexBuffer] Mesh vertexBuffer
         * @property {boolean|null} [interleaved] Mesh interleaved
         * @property {Array.<pb.IElement>|null} [elements] Mesh elements
         * @property {Uint8Array|null} [indexBuffer] Mesh indexBuffer
         * @property {number|null} [indexBufferBytesPerIndex] Mesh indexBufferBytesPerIndex
         * @property {number|null} [numVertices] Mesh numVertices
         */

        /**
         * Constructs a new Mesh.
         * @memberof pb
         * @classdesc Represents a Mesh.
         * @implements IMesh
         * @constructor
         * @param {pb.IMesh=} [properties] Properties to set
         */
        function Mesh(properties) {
            this.elements = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Mesh vertexBuffer.
         * @member {Uint8Array} vertexBuffer
         * @memberof pb.Mesh
         * @instance
         */
        Mesh.prototype.vertexBuffer = $util.newBuffer([]);

        /**
         * Mesh interleaved.
         * @member {boolean} interleaved
         * @memberof pb.Mesh
         * @instance
         */
        Mesh.prototype.interleaved = false;

        /**
         * Mesh elements.
         * @member {Array.<pb.IElement>} elements
         * @memberof pb.Mesh
         * @instance
         */
        Mesh.prototype.elements = $util.emptyArray;

        /**
         * Mesh indexBuffer.
         * @member {Uint8Array} indexBuffer
         * @memberof pb.Mesh
         * @instance
         */
        Mesh.prototype.indexBuffer = $util.newBuffer([]);

        /**
         * Mesh indexBufferBytesPerIndex.
         * @member {number} indexBufferBytesPerIndex
         * @memberof pb.Mesh
         * @instance
         */
        Mesh.prototype.indexBufferBytesPerIndex = 0;

        /**
         * Mesh numVertices.
         * @member {number} numVertices
         * @memberof pb.Mesh
         * @instance
         */
        Mesh.prototype.numVertices = 0;

        /**
         * Creates a new Mesh instance using the specified properties.
         * @function create
         * @memberof pb.Mesh
         * @static
         * @param {pb.IMesh=} [properties] Properties to set
         * @returns {pb.Mesh} Mesh instance
         */
        Mesh.create = function create(properties) {
            return new Mesh(properties);
        };

        /**
         * Encodes the specified Mesh message. Does not implicitly {@link pb.Mesh.verify|verify} messages.
         * @function encode
         * @memberof pb.Mesh
         * @static
         * @param {pb.IMesh} message Mesh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mesh.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vertexBuffer != null && Object.hasOwnProperty.call(message, "vertexBuffer"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.vertexBuffer);
            if (message.interleaved != null && Object.hasOwnProperty.call(message, "interleaved"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.interleaved);
            if (message.elements != null && message.elements.length)
                for (let i = 0; i < message.elements.length; ++i)
                    $root.pb.Element.encode(message.elements[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.indexBuffer != null && Object.hasOwnProperty.call(message, "indexBuffer"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.indexBuffer);
            if (message.indexBufferBytesPerIndex != null && Object.hasOwnProperty.call(message, "indexBufferBytesPerIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.indexBufferBytesPerIndex);
            if (message.numVertices != null && Object.hasOwnProperty.call(message, "numVertices"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.numVertices);
            return writer;
        };

        /**
         * Encodes the specified Mesh message, length delimited. Does not implicitly {@link pb.Mesh.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Mesh
         * @static
         * @param {pb.IMesh} message Mesh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mesh.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Mesh message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Mesh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Mesh} Mesh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mesh.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Mesh();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vertexBuffer = reader.bytes();
                        break;
                    }
                case 2: {
                        message.interleaved = reader.bool();
                        break;
                    }
                case 3: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.pb.Element.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.indexBuffer = reader.bytes();
                        break;
                    }
                case 5: {
                        message.indexBufferBytesPerIndex = reader.int32();
                        break;
                    }
                case 6: {
                        message.numVertices = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Mesh message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Mesh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Mesh} Mesh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mesh.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Mesh message.
         * @function verify
         * @memberof pb.Mesh
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Mesh.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vertexBuffer != null && message.hasOwnProperty("vertexBuffer"))
                if (!(message.vertexBuffer && typeof message.vertexBuffer.length === "number" || $util.isString(message.vertexBuffer)))
                    return "vertexBuffer: buffer expected";
            if (message.interleaved != null && message.hasOwnProperty("interleaved"))
                if (typeof message.interleaved !== "boolean")
                    return "interleaved: boolean expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (let i = 0; i < message.elements.length; ++i) {
                    let error = $root.pb.Element.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            if (message.indexBuffer != null && message.hasOwnProperty("indexBuffer"))
                if (!(message.indexBuffer && typeof message.indexBuffer.length === "number" || $util.isString(message.indexBuffer)))
                    return "indexBuffer: buffer expected";
            if (message.indexBufferBytesPerIndex != null && message.hasOwnProperty("indexBufferBytesPerIndex"))
                if (!$util.isInteger(message.indexBufferBytesPerIndex))
                    return "indexBufferBytesPerIndex: integer expected";
            if (message.numVertices != null && message.hasOwnProperty("numVertices"))
                if (!$util.isInteger(message.numVertices))
                    return "numVertices: integer expected";
            return null;
        };

        /**
         * Creates a Mesh message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Mesh
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Mesh} Mesh
         */
        Mesh.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Mesh)
                return object;
            let message = new $root.pb.Mesh();
            if (object.vertexBuffer != null)
                if (typeof object.vertexBuffer === "string")
                    $util.base64.decode(object.vertexBuffer, message.vertexBuffer = $util.newBuffer($util.base64.length(object.vertexBuffer)), 0);
                else if (object.vertexBuffer.length >= 0)
                    message.vertexBuffer = object.vertexBuffer;
            if (object.interleaved != null)
                message.interleaved = Boolean(object.interleaved);
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".pb.Mesh.elements: array expected");
                message.elements = [];
                for (let i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".pb.Mesh.elements: object expected");
                    message.elements[i] = $root.pb.Element.fromObject(object.elements[i]);
                }
            }
            if (object.indexBuffer != null)
                if (typeof object.indexBuffer === "string")
                    $util.base64.decode(object.indexBuffer, message.indexBuffer = $util.newBuffer($util.base64.length(object.indexBuffer)), 0);
                else if (object.indexBuffer.length >= 0)
                    message.indexBuffer = object.indexBuffer;
            if (object.indexBufferBytesPerIndex != null)
                message.indexBufferBytesPerIndex = object.indexBufferBytesPerIndex | 0;
            if (object.numVertices != null)
                message.numVertices = object.numVertices | 0;
            return message;
        };

        /**
         * Creates a plain object from a Mesh message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Mesh
         * @static
         * @param {pb.Mesh} message Mesh
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Mesh.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.vertexBuffer = "";
                else {
                    object.vertexBuffer = [];
                    if (options.bytes !== Array)
                        object.vertexBuffer = $util.newBuffer(object.vertexBuffer);
                }
                object.interleaved = false;
                if (options.bytes === String)
                    object.indexBuffer = "";
                else {
                    object.indexBuffer = [];
                    if (options.bytes !== Array)
                        object.indexBuffer = $util.newBuffer(object.indexBuffer);
                }
                object.indexBufferBytesPerIndex = 0;
                object.numVertices = 0;
            }
            if (message.vertexBuffer != null && message.hasOwnProperty("vertexBuffer"))
                object.vertexBuffer = options.bytes === String ? $util.base64.encode(message.vertexBuffer, 0, message.vertexBuffer.length) : options.bytes === Array ? Array.prototype.slice.call(message.vertexBuffer) : message.vertexBuffer;
            if (message.interleaved != null && message.hasOwnProperty("interleaved"))
                object.interleaved = message.interleaved;
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (let j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.pb.Element.toObject(message.elements[j], options);
            }
            if (message.indexBuffer != null && message.hasOwnProperty("indexBuffer"))
                object.indexBuffer = options.bytes === String ? $util.base64.encode(message.indexBuffer, 0, message.indexBuffer.length) : options.bytes === Array ? Array.prototype.slice.call(message.indexBuffer) : message.indexBuffer;
            if (message.indexBufferBytesPerIndex != null && message.hasOwnProperty("indexBufferBytesPerIndex"))
                object.indexBufferBytesPerIndex = message.indexBufferBytesPerIndex;
            if (message.numVertices != null && message.hasOwnProperty("numVertices"))
                object.numVertices = message.numVertices;
            return object;
        };

        /**
         * Converts this Mesh to JSON.
         * @function toJSON
         * @memberof pb.Mesh
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Mesh.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Mesh
         * @function getTypeUrl
         * @memberof pb.Mesh
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Mesh.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Mesh";
        };

        return Mesh;
    })();

    pb.ImageData = (function() {

        /**
         * Properties of an ImageData.
         * @memberof pb
         * @interface IImageData
         * @property {number|null} [width] ImageData width
         * @property {number|null} [height] ImageData height
         * @property {Uint8Array|null} [pixels] ImageData pixels
         */

        /**
         * Constructs a new ImageData.
         * @memberof pb
         * @classdesc Represents an ImageData.
         * @implements IImageData
         * @constructor
         * @param {pb.IImageData=} [properties] Properties to set
         */
        function ImageData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImageData width.
         * @member {number} width
         * @memberof pb.ImageData
         * @instance
         */
        ImageData.prototype.width = 0;

        /**
         * ImageData height.
         * @member {number} height
         * @memberof pb.ImageData
         * @instance
         */
        ImageData.prototype.height = 0;

        /**
         * ImageData pixels.
         * @member {Uint8Array} pixels
         * @memberof pb.ImageData
         * @instance
         */
        ImageData.prototype.pixels = $util.newBuffer([]);

        /**
         * Creates a new ImageData instance using the specified properties.
         * @function create
         * @memberof pb.ImageData
         * @static
         * @param {pb.IImageData=} [properties] Properties to set
         * @returns {pb.ImageData} ImageData instance
         */
        ImageData.create = function create(properties) {
            return new ImageData(properties);
        };

        /**
         * Encodes the specified ImageData message. Does not implicitly {@link pb.ImageData.verify|verify} messages.
         * @function encode
         * @memberof pb.ImageData
         * @static
         * @param {pb.IImageData} message ImageData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
            if (message.pixels != null && Object.hasOwnProperty.call(message, "pixels"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.pixels);
            return writer;
        };

        /**
         * Encodes the specified ImageData message, length delimited. Does not implicitly {@link pb.ImageData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ImageData
         * @static
         * @param {pb.IImageData} message ImageData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImageData message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ImageData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ImageData} ImageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ImageData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.width = reader.int32();
                        break;
                    }
                case 2: {
                        message.height = reader.int32();
                        break;
                    }
                case 3: {
                        message.pixels = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImageData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ImageData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ImageData} ImageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImageData message.
         * @function verify
         * @memberof pb.ImageData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImageData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.pixels != null && message.hasOwnProperty("pixels"))
                if (!(message.pixels && typeof message.pixels.length === "number" || $util.isString(message.pixels)))
                    return "pixels: buffer expected";
            return null;
        };

        /**
         * Creates an ImageData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ImageData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ImageData} ImageData
         */
        ImageData.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ImageData)
                return object;
            let message = new $root.pb.ImageData();
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.pixels != null)
                if (typeof object.pixels === "string")
                    $util.base64.decode(object.pixels, message.pixels = $util.newBuffer($util.base64.length(object.pixels)), 0);
                else if (object.pixels.length >= 0)
                    message.pixels = object.pixels;
            return message;
        };

        /**
         * Creates a plain object from an ImageData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ImageData
         * @static
         * @param {pb.ImageData} message ImageData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImageData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
                if (options.bytes === String)
                    object.pixels = "";
                else {
                    object.pixels = [];
                    if (options.bytes !== Array)
                        object.pixels = $util.newBuffer(object.pixels);
                }
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.pixels != null && message.hasOwnProperty("pixels"))
                object.pixels = options.bytes === String ? $util.base64.encode(message.pixels, 0, message.pixels.length) : options.bytes === Array ? Array.prototype.slice.call(message.pixels) : message.pixels;
            return object;
        };

        /**
         * Converts this ImageData to JSON.
         * @function toJSON
         * @memberof pb.ImageData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImageData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ImageData
         * @function getTypeUrl
         * @memberof pb.ImageData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ImageData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ImageData";
        };

        return ImageData;
    })();

    pb.MeshInstance = (function() {

        /**
         * Properties of a MeshInstance.
         * @memberof pb
         * @interface IMeshInstance
         * @property {pb.IMesh|null} [mesh] MeshInstance mesh
         * @property {pb.IMaterial|null} [material] MeshInstance material
         * @property {Object.<string,pb.IImageData>|null} [lightMapperImageData] MeshInstance lightMapperImageData
         */

        /**
         * Constructs a new MeshInstance.
         * @memberof pb
         * @classdesc Represents a MeshInstance.
         * @implements IMeshInstance
         * @constructor
         * @param {pb.IMeshInstance=} [properties] Properties to set
         */
        function MeshInstance(properties) {
            this.lightMapperImageData = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MeshInstance mesh.
         * @member {pb.IMesh|null|undefined} mesh
         * @memberof pb.MeshInstance
         * @instance
         */
        MeshInstance.prototype.mesh = null;

        /**
         * MeshInstance material.
         * @member {pb.IMaterial|null|undefined} material
         * @memberof pb.MeshInstance
         * @instance
         */
        MeshInstance.prototype.material = null;

        /**
         * MeshInstance lightMapperImageData.
         * @member {Object.<string,pb.IImageData>} lightMapperImageData
         * @memberof pb.MeshInstance
         * @instance
         */
        MeshInstance.prototype.lightMapperImageData = $util.emptyObject;

        /**
         * Creates a new MeshInstance instance using the specified properties.
         * @function create
         * @memberof pb.MeshInstance
         * @static
         * @param {pb.IMeshInstance=} [properties] Properties to set
         * @returns {pb.MeshInstance} MeshInstance instance
         */
        MeshInstance.create = function create(properties) {
            return new MeshInstance(properties);
        };

        /**
         * Encodes the specified MeshInstance message. Does not implicitly {@link pb.MeshInstance.verify|verify} messages.
         * @function encode
         * @memberof pb.MeshInstance
         * @static
         * @param {pb.IMeshInstance} message MeshInstance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeshInstance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mesh != null && Object.hasOwnProperty.call(message, "mesh"))
                $root.pb.Mesh.encode(message.mesh, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.material != null && Object.hasOwnProperty.call(message, "material"))
                $root.pb.Material.encode(message.material, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.lightMapperImageData != null && Object.hasOwnProperty.call(message, "lightMapperImageData"))
                for (let keys = Object.keys(message.lightMapperImageData), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.pb.ImageData.encode(message.lightMapperImageData[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified MeshInstance message, length delimited. Does not implicitly {@link pb.MeshInstance.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MeshInstance
         * @static
         * @param {pb.IMeshInstance} message MeshInstance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeshInstance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MeshInstance message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MeshInstance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MeshInstance} MeshInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeshInstance.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MeshInstance(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.mesh = $root.pb.Mesh.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.material = $root.pb.Material.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        if (message.lightMapperImageData === $util.emptyObject)
                            message.lightMapperImageData = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.pb.ImageData.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.lightMapperImageData[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MeshInstance message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MeshInstance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MeshInstance} MeshInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeshInstance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MeshInstance message.
         * @function verify
         * @memberof pb.MeshInstance
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MeshInstance.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mesh != null && message.hasOwnProperty("mesh")) {
                let error = $root.pb.Mesh.verify(message.mesh);
                if (error)
                    return "mesh." + error;
            }
            if (message.material != null && message.hasOwnProperty("material")) {
                let error = $root.pb.Material.verify(message.material);
                if (error)
                    return "material." + error;
            }
            if (message.lightMapperImageData != null && message.hasOwnProperty("lightMapperImageData")) {
                if (!$util.isObject(message.lightMapperImageData))
                    return "lightMapperImageData: object expected";
                let key = Object.keys(message.lightMapperImageData);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.pb.ImageData.verify(message.lightMapperImageData[key[i]]);
                    if (error)
                        return "lightMapperImageData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MeshInstance message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MeshInstance
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MeshInstance} MeshInstance
         */
        MeshInstance.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MeshInstance)
                return object;
            let message = new $root.pb.MeshInstance();
            if (object.mesh != null) {
                if (typeof object.mesh !== "object")
                    throw TypeError(".pb.MeshInstance.mesh: object expected");
                message.mesh = $root.pb.Mesh.fromObject(object.mesh);
            }
            if (object.material != null) {
                if (typeof object.material !== "object")
                    throw TypeError(".pb.MeshInstance.material: object expected");
                message.material = $root.pb.Material.fromObject(object.material);
            }
            if (object.lightMapperImageData) {
                if (typeof object.lightMapperImageData !== "object")
                    throw TypeError(".pb.MeshInstance.lightMapperImageData: object expected");
                message.lightMapperImageData = {};
                for (let keys = Object.keys(object.lightMapperImageData), i = 0; i < keys.length; ++i) {
                    if (typeof object.lightMapperImageData[keys[i]] !== "object")
                        throw TypeError(".pb.MeshInstance.lightMapperImageData: object expected");
                    message.lightMapperImageData[keys[i]] = $root.pb.ImageData.fromObject(object.lightMapperImageData[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MeshInstance message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MeshInstance
         * @static
         * @param {pb.MeshInstance} message MeshInstance
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MeshInstance.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.lightMapperImageData = {};
            if (options.defaults) {
                object.mesh = null;
                object.material = null;
            }
            if (message.mesh != null && message.hasOwnProperty("mesh"))
                object.mesh = $root.pb.Mesh.toObject(message.mesh, options);
            if (message.material != null && message.hasOwnProperty("material"))
                object.material = $root.pb.Material.toObject(message.material, options);
            let keys2;
            if (message.lightMapperImageData && (keys2 = Object.keys(message.lightMapperImageData)).length) {
                object.lightMapperImageData = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.lightMapperImageData[keys2[j]] = $root.pb.ImageData.toObject(message.lightMapperImageData[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this MeshInstance to JSON.
         * @function toJSON
         * @memberof pb.MeshInstance
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MeshInstance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MeshInstance
         * @function getTypeUrl
         * @memberof pb.MeshInstance
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MeshInstance.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.MeshInstance";
        };

        return MeshInstance;
    })();

    pb.Node = (function() {

        /**
         * Properties of a Node.
         * @memberof pb
         * @interface INode
         * @property {string|null} [name] Node name
         * @property {Array.<pb.INode>|null} [children] Node children
         * @property {Uint8Array|null} [meshBuffer] Node meshBuffer
         * @property {pb.IVec3|null} [position] Node position
         * @property {pb.IQuat|null} [rotation] Node rotation
         * @property {pb.IVec3|null} [scale] Node scale
         * @property {Array.<pb.IMeshInstance>|null} [meshInstances] Node meshInstances
         * @property {Array.<string>|null} [assetUrl] Node assetUrl
         */

        /**
         * Constructs a new Node.
         * @memberof pb
         * @classdesc Represents a Node.
         * @implements INode
         * @constructor
         * @param {pb.INode=} [properties] Properties to set
         */
        function Node(properties) {
            this.children = [];
            this.meshInstances = [];
            this.assetUrl = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Node name.
         * @member {string} name
         * @memberof pb.Node
         * @instance
         */
        Node.prototype.name = "";

        /**
         * Node children.
         * @member {Array.<pb.INode>} children
         * @memberof pb.Node
         * @instance
         */
        Node.prototype.children = $util.emptyArray;

        /**
         * Node meshBuffer.
         * @member {Uint8Array} meshBuffer
         * @memberof pb.Node
         * @instance
         */
        Node.prototype.meshBuffer = $util.newBuffer([]);

        /**
         * Node position.
         * @member {pb.IVec3|null|undefined} position
         * @memberof pb.Node
         * @instance
         */
        Node.prototype.position = null;

        /**
         * Node rotation.
         * @member {pb.IQuat|null|undefined} rotation
         * @memberof pb.Node
         * @instance
         */
        Node.prototype.rotation = null;

        /**
         * Node scale.
         * @member {pb.IVec3|null|undefined} scale
         * @memberof pb.Node
         * @instance
         */
        Node.prototype.scale = null;

        /**
         * Node meshInstances.
         * @member {Array.<pb.IMeshInstance>} meshInstances
         * @memberof pb.Node
         * @instance
         */
        Node.prototype.meshInstances = $util.emptyArray;

        /**
         * Node assetUrl.
         * @member {Array.<string>} assetUrl
         * @memberof pb.Node
         * @instance
         */
        Node.prototype.assetUrl = $util.emptyArray;

        /**
         * Creates a new Node instance using the specified properties.
         * @function create
         * @memberof pb.Node
         * @static
         * @param {pb.INode=} [properties] Properties to set
         * @returns {pb.Node} Node instance
         */
        Node.create = function create(properties) {
            return new Node(properties);
        };

        /**
         * Encodes the specified Node message. Does not implicitly {@link pb.Node.verify|verify} messages.
         * @function encode
         * @memberof pb.Node
         * @static
         * @param {pb.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.children != null && message.children.length)
                for (let i = 0; i < message.children.length; ++i)
                    $root.pb.Node.encode(message.children[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.meshBuffer != null && Object.hasOwnProperty.call(message, "meshBuffer"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.meshBuffer);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.pb.Vec3.encode(message.position, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                $root.pb.Quat.encode(message.rotation, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                $root.pb.Vec3.encode(message.scale, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.meshInstances != null && message.meshInstances.length)
                for (let i = 0; i < message.meshInstances.length; ++i)
                    $root.pb.MeshInstance.encode(message.meshInstances[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.assetUrl != null && message.assetUrl.length)
                for (let i = 0; i < message.assetUrl.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.assetUrl[i]);
            return writer;
        };

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link pb.Node.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Node
         * @static
         * @param {pb.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Node();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.pb.Node.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.meshBuffer = reader.bytes();
                        break;
                    }
                case 4: {
                        message.position = $root.pb.Vec3.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.rotation = $root.pb.Quat.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.scale = $root.pb.Vec3.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        if (!(message.meshInstances && message.meshInstances.length))
                            message.meshInstances = [];
                        message.meshInstances.push($root.pb.MeshInstance.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        if (!(message.assetUrl && message.assetUrl.length))
                            message.assetUrl = [];
                        message.assetUrl.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Node message.
         * @function verify
         * @memberof pb.Node
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Node.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (let i = 0; i < message.children.length; ++i) {
                    let error = $root.pb.Node.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            if (message.meshBuffer != null && message.hasOwnProperty("meshBuffer"))
                if (!(message.meshBuffer && typeof message.meshBuffer.length === "number" || $util.isString(message.meshBuffer)))
                    return "meshBuffer: buffer expected";
            if (message.position != null && message.hasOwnProperty("position")) {
                let error = $root.pb.Vec3.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.rotation != null && message.hasOwnProperty("rotation")) {
                let error = $root.pb.Quat.verify(message.rotation);
                if (error)
                    return "rotation." + error;
            }
            if (message.scale != null && message.hasOwnProperty("scale")) {
                let error = $root.pb.Vec3.verify(message.scale);
                if (error)
                    return "scale." + error;
            }
            if (message.meshInstances != null && message.hasOwnProperty("meshInstances")) {
                if (!Array.isArray(message.meshInstances))
                    return "meshInstances: array expected";
                for (let i = 0; i < message.meshInstances.length; ++i) {
                    let error = $root.pb.MeshInstance.verify(message.meshInstances[i]);
                    if (error)
                        return "meshInstances." + error;
                }
            }
            if (message.assetUrl != null && message.hasOwnProperty("assetUrl")) {
                if (!Array.isArray(message.assetUrl))
                    return "assetUrl: array expected";
                for (let i = 0; i < message.assetUrl.length; ++i)
                    if (!$util.isString(message.assetUrl[i]))
                        return "assetUrl: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Node
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Node} Node
         */
        Node.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Node)
                return object;
            let message = new $root.pb.Node();
            if (object.name != null)
                message.name = String(object.name);
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".pb.Node.children: array expected");
                message.children = [];
                for (let i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".pb.Node.children: object expected");
                    message.children[i] = $root.pb.Node.fromObject(object.children[i]);
                }
            }
            if (object.meshBuffer != null)
                if (typeof object.meshBuffer === "string")
                    $util.base64.decode(object.meshBuffer, message.meshBuffer = $util.newBuffer($util.base64.length(object.meshBuffer)), 0);
                else if (object.meshBuffer.length >= 0)
                    message.meshBuffer = object.meshBuffer;
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".pb.Node.position: object expected");
                message.position = $root.pb.Vec3.fromObject(object.position);
            }
            if (object.rotation != null) {
                if (typeof object.rotation !== "object")
                    throw TypeError(".pb.Node.rotation: object expected");
                message.rotation = $root.pb.Quat.fromObject(object.rotation);
            }
            if (object.scale != null) {
                if (typeof object.scale !== "object")
                    throw TypeError(".pb.Node.scale: object expected");
                message.scale = $root.pb.Vec3.fromObject(object.scale);
            }
            if (object.meshInstances) {
                if (!Array.isArray(object.meshInstances))
                    throw TypeError(".pb.Node.meshInstances: array expected");
                message.meshInstances = [];
                for (let i = 0; i < object.meshInstances.length; ++i) {
                    if (typeof object.meshInstances[i] !== "object")
                        throw TypeError(".pb.Node.meshInstances: object expected");
                    message.meshInstances[i] = $root.pb.MeshInstance.fromObject(object.meshInstances[i]);
                }
            }
            if (object.assetUrl) {
                if (!Array.isArray(object.assetUrl))
                    throw TypeError(".pb.Node.assetUrl: array expected");
                message.assetUrl = [];
                for (let i = 0; i < object.assetUrl.length; ++i)
                    message.assetUrl[i] = String(object.assetUrl[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Node
         * @static
         * @param {pb.Node} message Node
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Node.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.children = [];
                object.meshInstances = [];
                object.assetUrl = [];
            }
            if (options.defaults) {
                object.name = "";
                if (options.bytes === String)
                    object.meshBuffer = "";
                else {
                    object.meshBuffer = [];
                    if (options.bytes !== Array)
                        object.meshBuffer = $util.newBuffer(object.meshBuffer);
                }
                object.position = null;
                object.rotation = null;
                object.scale = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.children && message.children.length) {
                object.children = [];
                for (let j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.pb.Node.toObject(message.children[j], options);
            }
            if (message.meshBuffer != null && message.hasOwnProperty("meshBuffer"))
                object.meshBuffer = options.bytes === String ? $util.base64.encode(message.meshBuffer, 0, message.meshBuffer.length) : options.bytes === Array ? Array.prototype.slice.call(message.meshBuffer) : message.meshBuffer;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.pb.Vec3.toObject(message.position, options);
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = $root.pb.Quat.toObject(message.rotation, options);
            if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = $root.pb.Vec3.toObject(message.scale, options);
            if (message.meshInstances && message.meshInstances.length) {
                object.meshInstances = [];
                for (let j = 0; j < message.meshInstances.length; ++j)
                    object.meshInstances[j] = $root.pb.MeshInstance.toObject(message.meshInstances[j], options);
            }
            if (message.assetUrl && message.assetUrl.length) {
                object.assetUrl = [];
                for (let j = 0; j < message.assetUrl.length; ++j)
                    object.assetUrl[j] = message.assetUrl[j];
            }
            return object;
        };

        /**
         * Converts this Node to JSON.
         * @function toJSON
         * @memberof pb.Node
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Node.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Node
         * @function getTypeUrl
         * @memberof pb.Node
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Node.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Node";
        };

        return Node;
    })();

    return pb;
})();

export { $root as default };
