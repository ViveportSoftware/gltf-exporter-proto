import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace pb. */
export namespace pb {

    /** Properties of a Vec2. */
    interface IVec2 {

        /** Vec2 x */
        x?: (number|null);

        /** Vec2 y */
        y?: (number|null);
    }

    /** Represents a Vec2. */
    class Vec2 implements IVec2 {

        /**
         * Constructs a new Vec2.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IVec2);

        /** Vec2 x. */
        public x: number;

        /** Vec2 y. */
        public y: number;

        /**
         * Creates a new Vec2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vec2 instance
         */
        public static create(properties?: pb.IVec2): pb.Vec2;

        /**
         * Encodes the specified Vec2 message. Does not implicitly {@link pb.Vec2.verify|verify} messages.
         * @param message Vec2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IVec2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Vec2 message, length delimited. Does not implicitly {@link pb.Vec2.verify|verify} messages.
         * @param message Vec2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IVec2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Vec2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Vec2;

        /**
         * Decodes a Vec2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Vec2;

        /**
         * Verifies a Vec2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Vec2 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Vec2
         */
        public static fromObject(object: { [k: string]: any }): pb.Vec2;

        /**
         * Creates a plain object from a Vec2 message. Also converts values to other types if specified.
         * @param message Vec2
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Vec2, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Vec2 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Vec2
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Vec3. */
    interface IVec3 {

        /** Vec3 x */
        x?: (number|null);

        /** Vec3 y */
        y?: (number|null);

        /** Vec3 z */
        z?: (number|null);
    }

    /** Represents a Vec3. */
    class Vec3 implements IVec3 {

        /**
         * Constructs a new Vec3.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IVec3);

        /** Vec3 x. */
        public x: number;

        /** Vec3 y. */
        public y: number;

        /** Vec3 z. */
        public z: number;

        /**
         * Creates a new Vec3 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vec3 instance
         */
        public static create(properties?: pb.IVec3): pb.Vec3;

        /**
         * Encodes the specified Vec3 message. Does not implicitly {@link pb.Vec3.verify|verify} messages.
         * @param message Vec3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IVec3, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Vec3 message, length delimited. Does not implicitly {@link pb.Vec3.verify|verify} messages.
         * @param message Vec3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IVec3, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Vec3 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vec3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Vec3;

        /**
         * Decodes a Vec3 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vec3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Vec3;

        /**
         * Verifies a Vec3 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Vec3 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Vec3
         */
        public static fromObject(object: { [k: string]: any }): pb.Vec3;

        /**
         * Creates a plain object from a Vec3 message. Also converts values to other types if specified.
         * @param message Vec3
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Vec3, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Vec3 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Vec3
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Quat. */
    interface IQuat {

        /** Quat x */
        x?: (number|null);

        /** Quat y */
        y?: (number|null);

        /** Quat z */
        z?: (number|null);

        /** Quat w */
        w?: (number|null);
    }

    /** Represents a Quat. */
    class Quat implements IQuat {

        /**
         * Constructs a new Quat.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IQuat);

        /** Quat x. */
        public x: number;

        /** Quat y. */
        public y: number;

        /** Quat z. */
        public z: number;

        /** Quat w. */
        public w: number;

        /**
         * Creates a new Quat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Quat instance
         */
        public static create(properties?: pb.IQuat): pb.Quat;

        /**
         * Encodes the specified Quat message. Does not implicitly {@link pb.Quat.verify|verify} messages.
         * @param message Quat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IQuat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Quat message, length delimited. Does not implicitly {@link pb.Quat.verify|verify} messages.
         * @param message Quat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IQuat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Quat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Quat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Quat;

        /**
         * Decodes a Quat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Quat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Quat;

        /**
         * Verifies a Quat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Quat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Quat
         */
        public static fromObject(object: { [k: string]: any }): pb.Quat;

        /**
         * Creates a plain object from a Quat message. Also converts values to other types if specified.
         * @param message Quat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Quat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Quat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Quat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Color. */
    interface IColor {

        /** Color r */
        r?: (number|null);

        /** Color g */
        g?: (number|null);

        /** Color b */
        b?: (number|null);

        /** Color a */
        a?: (number|null);
    }

    /** Represents a Color. */
    class Color implements IColor {

        /**
         * Constructs a new Color.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IColor);

        /** Color r. */
        public r: number;

        /** Color g. */
        public g: number;

        /** Color b. */
        public b: number;

        /** Color a. */
        public a: number;

        /**
         * Creates a new Color instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Color instance
         */
        public static create(properties?: pb.IColor): pb.Color;

        /**
         * Encodes the specified Color message. Does not implicitly {@link pb.Color.verify|verify} messages.
         * @param message Color message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Color message, length delimited. Does not implicitly {@link pb.Color.verify|verify} messages.
         * @param message Color message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Color message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Color
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Color;

        /**
         * Decodes a Color message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Color
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Color;

        /**
         * Verifies a Color message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Color message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Color
         */
        public static fromObject(object: { [k: string]: any }): pb.Color;

        /**
         * Creates a plain object from a Color message. Also converts values to other types if specified.
         * @param message Color
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Color to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Color
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Element. */
    interface IElement {

        /** Element name */
        name?: (string|null);

        /** Element offset */
        offset?: (number|null);

        /** Element stride */
        stride?: (number|null);

        /** Element dataType */
        dataType?: (number|null);

        /** Element numComponents */
        numComponents?: (number|null);

        /** Element normalize */
        normalize?: (boolean|null);

        /** Element size */
        size?: (number|null);

        /** Element asInt */
        asInt?: (boolean|null);
    }

    /** Represents an Element. */
    class Element implements IElement {

        /**
         * Constructs a new Element.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IElement);

        /** Element name. */
        public name: string;

        /** Element offset. */
        public offset: number;

        /** Element stride. */
        public stride: number;

        /** Element dataType. */
        public dataType: number;

        /** Element numComponents. */
        public numComponents: number;

        /** Element normalize. */
        public normalize: boolean;

        /** Element size. */
        public size: number;

        /** Element asInt. */
        public asInt: boolean;

        /**
         * Creates a new Element instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Element instance
         */
        public static create(properties?: pb.IElement): pb.Element;

        /**
         * Encodes the specified Element message. Does not implicitly {@link pb.Element.verify|verify} messages.
         * @param message Element message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Element message, length delimited. Does not implicitly {@link pb.Element.verify|verify} messages.
         * @param message Element message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Element message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Element
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Element;

        /**
         * Decodes an Element message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Element
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Element;

        /**
         * Verifies an Element message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Element message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Element
         */
        public static fromObject(object: { [k: string]: any }): pb.Element;

        /**
         * Creates a plain object from an Element message. Also converts values to other types if specified.
         * @param message Element
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Element, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Element to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Element
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a File. */
    interface IFile {

        /** File url */
        url?: (string|null);
    }

    /** Represents a File. */
    class File implements IFile {

        /**
         * Constructs a new File.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFile);

        /** File url. */
        public url: string;

        /**
         * Creates a new File instance using the specified properties.
         * @param [properties] Properties to set
         * @returns File instance
         */
        public static create(properties?: pb.IFile): pb.File;

        /**
         * Encodes the specified File message. Does not implicitly {@link pb.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link pb.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a File message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.File;

        /**
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.File;

        /**
         * Verifies a File message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a File message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns File
         */
        public static fromObject(object: { [k: string]: any }): pb.File;

        /**
         * Creates a plain object from a File message. Also converts values to other types if specified.
         * @param message File
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this File to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for File
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Asset. */
    interface IAsset {

        /** Asset name */
        name?: (string|null);

        /** Asset file */
        file?: (pb.IFile|null);

        /** Asset rgbm */
        rgbm?: (boolean|null);
    }

    /** Represents an Asset. */
    class Asset implements IAsset {

        /**
         * Constructs a new Asset.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAsset);

        /** Asset name. */
        public name: string;

        /** Asset file. */
        public file?: (pb.IFile|null);

        /** Asset rgbm. */
        public rgbm: boolean;

        /**
         * Creates a new Asset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Asset instance
         */
        public static create(properties?: pb.IAsset): pb.Asset;

        /**
         * Encodes the specified Asset message. Does not implicitly {@link pb.Asset.verify|verify} messages.
         * @param message Asset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Asset message, length delimited. Does not implicitly {@link pb.Asset.verify|verify} messages.
         * @param message Asset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Asset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Asset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Asset;

        /**
         * Decodes an Asset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Asset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Asset;

        /**
         * Verifies an Asset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Asset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Asset
         */
        public static fromObject(object: { [k: string]: any }): pb.Asset;

        /**
         * Creates a plain object from an Asset message. Also converts values to other types if specified.
         * @param message Asset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Asset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Asset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Asset
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Material. */
    interface IMaterial {

        /** Material name */
        name?: (string|null);

        /** Material assets */
        assets?: ({ [k: string]: pb.IAsset }|null);

        /** Material emissive */
        emissive?: (pb.IColor|null);

        /** Material lightMapChannel */
        lightMapChannel?: (string|null);

        /** Material lightMapUv */
        lightMapUv?: (number|null);

        /** Material useMetalness */
        useMetalness?: (boolean|null);

        /** Material aoMapUv */
        aoMapUv?: (number|null);

        /** Material diffuseMapUv */
        diffuseMapUv?: (number|null);

        /** Material diffuse */
        diffuse?: (pb.IColor|null);

        /** Material specular */
        specular?: (pb.IColor|null);

        /** Material metalness */
        metalness?: (number|null);

        /** Material doubleSided */
        doubleSided?: (boolean|null);

        /** Material diffuseMapOffset */
        diffuseMapOffset?: (pb.IVec2|null);

        /** Material diffuseMapRotation */
        diffuseMapRotation?: (number|null);

        /** Material diffuseMapTiling */
        diffuseMapTiling?: (pb.IVec2|null);

        /** Material emissiveMapOffset */
        emissiveMapOffset?: (pb.IVec2|null);

        /** Material emissiveMapRotation */
        emissiveMapRotation?: (number|null);

        /** Material emissiveMapTiling */
        emissiveMapTiling?: (pb.IVec2|null);

        /** Material aoMapOffset */
        aoMapOffset?: (pb.IVec2|null);

        /** Material aoMapRotation */
        aoMapRotation?: (number|null);

        /** Material aoMapTiling */
        aoMapTiling?: (pb.IVec2|null);

        /** Material normalMapOffset */
        normalMapOffset?: (pb.IVec2|null);

        /** Material normalMapRotation */
        normalMapRotation?: (number|null);

        /** Material normalMapTiling */
        normalMapTiling?: (pb.IVec2|null);

        /** Material metalnessMapOffset */
        metalnessMapOffset?: (pb.IVec2|null);

        /** Material metalnessMapRotation */
        metalnessMapRotation?: (number|null);

        /** Material metalnessMapTiling */
        metalnessMapTiling?: (pb.IVec2|null);

        /** Material gloss */
        gloss?: (number|null);

        /** Material glossMapChannel */
        glossMapChannel?: (string|null);

        /** Material metalnessMapChannel */
        metalnessMapChannel?: (string|null);

        /** Material specularMapChannel */
        specularMapChannel?: (string|null);

        /** Material glossInvert */
        glossInvert?: (boolean|null);

        /** Material ambient */
        ambient?: (pb.IColor|null);

        /** Material emissiveIntensity */
        emissiveIntensity?: (number|null);

        /** Material refractionIndex */
        refractionIndex?: (number|null);

        /** Material refraction */
        refraction?: (number|null);

        /** Material diffuseMapTint */
        diffuseMapTint?: (boolean|null);
    }

    /** Represents a Material. */
    class Material implements IMaterial {

        /**
         * Constructs a new Material.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMaterial);

        /** Material name. */
        public name: string;

        /** Material assets. */
        public assets: { [k: string]: pb.IAsset };

        /** Material emissive. */
        public emissive?: (pb.IColor|null);

        /** Material lightMapChannel. */
        public lightMapChannel: string;

        /** Material lightMapUv. */
        public lightMapUv: number;

        /** Material useMetalness. */
        public useMetalness: boolean;

        /** Material aoMapUv. */
        public aoMapUv: number;

        /** Material diffuseMapUv. */
        public diffuseMapUv: number;

        /** Material diffuse. */
        public diffuse?: (pb.IColor|null);

        /** Material specular. */
        public specular?: (pb.IColor|null);

        /** Material metalness. */
        public metalness: number;

        /** Material doubleSided. */
        public doubleSided: boolean;

        /** Material diffuseMapOffset. */
        public diffuseMapOffset?: (pb.IVec2|null);

        /** Material diffuseMapRotation. */
        public diffuseMapRotation: number;

        /** Material diffuseMapTiling. */
        public diffuseMapTiling?: (pb.IVec2|null);

        /** Material emissiveMapOffset. */
        public emissiveMapOffset?: (pb.IVec2|null);

        /** Material emissiveMapRotation. */
        public emissiveMapRotation: number;

        /** Material emissiveMapTiling. */
        public emissiveMapTiling?: (pb.IVec2|null);

        /** Material aoMapOffset. */
        public aoMapOffset?: (pb.IVec2|null);

        /** Material aoMapRotation. */
        public aoMapRotation: number;

        /** Material aoMapTiling. */
        public aoMapTiling?: (pb.IVec2|null);

        /** Material normalMapOffset. */
        public normalMapOffset?: (pb.IVec2|null);

        /** Material normalMapRotation. */
        public normalMapRotation: number;

        /** Material normalMapTiling. */
        public normalMapTiling?: (pb.IVec2|null);

        /** Material metalnessMapOffset. */
        public metalnessMapOffset?: (pb.IVec2|null);

        /** Material metalnessMapRotation. */
        public metalnessMapRotation: number;

        /** Material metalnessMapTiling. */
        public metalnessMapTiling?: (pb.IVec2|null);

        /** Material gloss. */
        public gloss: number;

        /** Material glossMapChannel. */
        public glossMapChannel: string;

        /** Material metalnessMapChannel. */
        public metalnessMapChannel: string;

        /** Material specularMapChannel. */
        public specularMapChannel: string;

        /** Material glossInvert. */
        public glossInvert: boolean;

        /** Material ambient. */
        public ambient?: (pb.IColor|null);

        /** Material emissiveIntensity. */
        public emissiveIntensity: number;

        /** Material refractionIndex. */
        public refractionIndex: number;

        /** Material refraction. */
        public refraction: number;

        /** Material diffuseMapTint. */
        public diffuseMapTint: boolean;

        /**
         * Creates a new Material instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Material instance
         */
        public static create(properties?: pb.IMaterial): pb.Material;

        /**
         * Encodes the specified Material message. Does not implicitly {@link pb.Material.verify|verify} messages.
         * @param message Material message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Material message, length delimited. Does not implicitly {@link pb.Material.verify|verify} messages.
         * @param message Material message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Material message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Material
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Material;

        /**
         * Decodes a Material message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Material
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Material;

        /**
         * Verifies a Material message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Material message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Material
         */
        public static fromObject(object: { [k: string]: any }): pb.Material;

        /**
         * Creates a plain object from a Material message. Also converts values to other types if specified.
         * @param message Material
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Material, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Material to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Material
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Mesh. */
    interface IMesh {

        /** Mesh vertexBuffer */
        vertexBuffer?: (Uint8Array|null);

        /** Mesh interleaved */
        interleaved?: (boolean|null);

        /** Mesh elements */
        elements?: (pb.IElement[]|null);

        /** Mesh indexBuffer */
        indexBuffer?: (Uint8Array|null);

        /** Mesh indexBufferBytesPerIndex */
        indexBufferBytesPerIndex?: (number|null);

        /** Mesh numVertices */
        numVertices?: (number|null);
    }

    /** Represents a Mesh. */
    class Mesh implements IMesh {

        /**
         * Constructs a new Mesh.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMesh);

        /** Mesh vertexBuffer. */
        public vertexBuffer: Uint8Array;

        /** Mesh interleaved. */
        public interleaved: boolean;

        /** Mesh elements. */
        public elements: pb.IElement[];

        /** Mesh indexBuffer. */
        public indexBuffer: Uint8Array;

        /** Mesh indexBufferBytesPerIndex. */
        public indexBufferBytesPerIndex: number;

        /** Mesh numVertices. */
        public numVertices: number;

        /**
         * Creates a new Mesh instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mesh instance
         */
        public static create(properties?: pb.IMesh): pb.Mesh;

        /**
         * Encodes the specified Mesh message. Does not implicitly {@link pb.Mesh.verify|verify} messages.
         * @param message Mesh message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMesh, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Mesh message, length delimited. Does not implicitly {@link pb.Mesh.verify|verify} messages.
         * @param message Mesh message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMesh, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mesh message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mesh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Mesh;

        /**
         * Decodes a Mesh message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Mesh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Mesh;

        /**
         * Verifies a Mesh message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mesh message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mesh
         */
        public static fromObject(object: { [k: string]: any }): pb.Mesh;

        /**
         * Creates a plain object from a Mesh message. Also converts values to other types if specified.
         * @param message Mesh
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Mesh, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mesh to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Mesh
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ImageData. */
    interface IImageData {

        /** ImageData width */
        width?: (number|null);

        /** ImageData height */
        height?: (number|null);

        /** ImageData pixels */
        pixels?: (Uint8Array|null);
    }

    /** Represents an ImageData. */
    class ImageData implements IImageData {

        /**
         * Constructs a new ImageData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IImageData);

        /** ImageData width. */
        public width: number;

        /** ImageData height. */
        public height: number;

        /** ImageData pixels. */
        public pixels: Uint8Array;

        /**
         * Creates a new ImageData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ImageData instance
         */
        public static create(properties?: pb.IImageData): pb.ImageData;

        /**
         * Encodes the specified ImageData message. Does not implicitly {@link pb.ImageData.verify|verify} messages.
         * @param message ImageData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IImageData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImageData message, length delimited. Does not implicitly {@link pb.ImageData.verify|verify} messages.
         * @param message ImageData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IImageData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImageData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ImageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ImageData;

        /**
         * Decodes an ImageData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ImageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ImageData;

        /**
         * Verifies an ImageData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ImageData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ImageData
         */
        public static fromObject(object: { [k: string]: any }): pb.ImageData;

        /**
         * Creates a plain object from an ImageData message. Also converts values to other types if specified.
         * @param message ImageData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ImageData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ImageData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ImageData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MeshInstance. */
    interface IMeshInstance {

        /** MeshInstance mesh */
        mesh?: (pb.IMesh|null);

        /** MeshInstance material */
        material?: (pb.IMaterial|null);

        /** MeshInstance lightMapperImageData */
        lightMapperImageData?: ({ [k: string]: pb.IImageData }|null);
    }

    /** Represents a MeshInstance. */
    class MeshInstance implements IMeshInstance {

        /**
         * Constructs a new MeshInstance.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMeshInstance);

        /** MeshInstance mesh. */
        public mesh?: (pb.IMesh|null);

        /** MeshInstance material. */
        public material?: (pb.IMaterial|null);

        /** MeshInstance lightMapperImageData. */
        public lightMapperImageData: { [k: string]: pb.IImageData };

        /**
         * Creates a new MeshInstance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeshInstance instance
         */
        public static create(properties?: pb.IMeshInstance): pb.MeshInstance;

        /**
         * Encodes the specified MeshInstance message. Does not implicitly {@link pb.MeshInstance.verify|verify} messages.
         * @param message MeshInstance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMeshInstance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MeshInstance message, length delimited. Does not implicitly {@link pb.MeshInstance.verify|verify} messages.
         * @param message MeshInstance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMeshInstance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeshInstance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MeshInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MeshInstance;

        /**
         * Decodes a MeshInstance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MeshInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.MeshInstance;

        /**
         * Verifies a MeshInstance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MeshInstance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeshInstance
         */
        public static fromObject(object: { [k: string]: any }): pb.MeshInstance;

        /**
         * Creates a plain object from a MeshInstance message. Also converts values to other types if specified.
         * @param message MeshInstance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.MeshInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeshInstance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MeshInstance
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Node. */
    interface INode {

        /** Node name */
        name?: (string|null);

        /** Node children */
        children?: (pb.INode[]|null);

        /** Node meshBuffer */
        meshBuffer?: (Uint8Array|null);

        /** Node position */
        position?: (pb.IVec3|null);

        /** Node rotation */
        rotation?: (pb.IQuat|null);

        /** Node scale */
        scale?: (pb.IVec3|null);

        /** Node meshInstances */
        meshInstances?: (pb.IMeshInstance[]|null);

        /** Node assetUrl */
        assetUrl?: (string[]|null);
    }

    /** Represents a Node. */
    class Node implements INode {

        /**
         * Constructs a new Node.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INode);

        /** Node name. */
        public name: string;

        /** Node children. */
        public children: pb.INode[];

        /** Node meshBuffer. */
        public meshBuffer: Uint8Array;

        /** Node position. */
        public position?: (pb.IVec3|null);

        /** Node rotation. */
        public rotation?: (pb.IQuat|null);

        /** Node scale. */
        public scale?: (pb.IVec3|null);

        /** Node meshInstances. */
        public meshInstances: pb.IMeshInstance[];

        /** Node assetUrl. */
        public assetUrl: string[];

        /**
         * Creates a new Node instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Node instance
         */
        public static create(properties?: pb.INode): pb.Node;

        /**
         * Encodes the specified Node message. Does not implicitly {@link pb.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link pb.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Node;

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Node;

        /**
         * Verifies a Node message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Node
         */
        public static fromObject(object: { [k: string]: any }): pb.Node;

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @param message Node
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Node to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Node
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
