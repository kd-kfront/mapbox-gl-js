// This file is generated. Edit build/generate-struct-arrays.js, then run `yarn run codegen`.
/* eslint-disable camelcase */
// @flow

import assert from 'assert';
import {Struct, StructArray} from '../util/struct_array.js';
import {register} from '../util/web_worker_transfer.js';

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[2]
 *
 * @private
 */
class StructArrayLayout2i4 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1);
    }

    emplace(i: number, v0: number, v1: number): number {
        const o2 = i * 2;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        return i;
    }
}

StructArrayLayout2i4.prototype.bytesPerElement = 4;
register(StructArrayLayout2i4, 'StructArrayLayout2i4');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 *
 * @private
 */
class StructArrayLayout3i6 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2);
    }

    emplace(i: number, v0: number, v1: number, v2: number): number {
        const o2 = i * 3;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        return i;
    }
}

StructArrayLayout3i6.prototype.bytesPerElement = 6;
register(StructArrayLayout3i6, 'StructArrayLayout3i6');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[4]
 *
 * @private
 */
class StructArrayLayout4i8 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number): number {
        const o2 = i * 4;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        return i;
    }
}

StructArrayLayout4i8.prototype.bytesPerElement = 8;
register(StructArrayLayout4i8, 'StructArrayLayout4i8');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[2]
 * [4]: Uint8[4]
 * [8]: Float32[1]
 *
 * @private
 */
class StructArrayLayout2i4ub1f12 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const o2 = i * 6;
        const o1 = i * 12;
        const o4 = i * 3;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.uint8[o1 + 4] = v2;
        this.uint8[o1 + 5] = v3;
        this.uint8[o1 + 6] = v4;
        this.uint8[o1 + 7] = v5;
        this.float32[o4 + 2] = v6;
        return i;
    }
}

StructArrayLayout2i4ub1f12.prototype.bytesPerElement = 12;
register(StructArrayLayout2i4ub1f12, 'StructArrayLayout2i4ub1f12');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[4]
 *
 * @private
 */
class StructArrayLayout4f16 extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number): number {
        const o4 = i * 4;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        return i;
    }
}

StructArrayLayout4f16.prototype.bytesPerElement = 16;
register(StructArrayLayout4f16, 'StructArrayLayout4f16');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[10]
 *
 * @private
 */
class StructArrayLayout10ui20 extends StructArray {
    uint8: Uint8Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number): number {
        const o2 = i * 10;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        this.uint16[o2 + 3] = v3;
        this.uint16[o2 + 4] = v4;
        this.uint16[o2 + 5] = v5;
        this.uint16[o2 + 6] = v6;
        this.uint16[o2 + 7] = v7;
        this.uint16[o2 + 8] = v8;
        this.uint16[o2 + 9] = v9;
        return i;
    }
}

StructArrayLayout10ui20.prototype.bytesPerElement = 20;
register(StructArrayLayout10ui20, 'StructArrayLayout10ui20');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[8]
 *
 * @private
 */
class StructArrayLayout8ui16 extends StructArray {
    uint8: Uint8Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number): number {
        const o2 = i * 8;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        this.uint16[o2 + 3] = v3;
        this.uint16[o2 + 4] = v4;
        this.uint16[o2 + 5] = v5;
        this.uint16[o2 + 6] = v6;
        this.uint16[o2 + 7] = v7;
        return i;
    }
}

StructArrayLayout8ui16.prototype.bytesPerElement = 16;
register(StructArrayLayout8ui16, 'StructArrayLayout8ui16');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[6]
 *
 * @private
 */
class StructArrayLayout6i12 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const o2 = i * 6;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.int16[o2 + 5] = v5;
        return i;
    }
}

StructArrayLayout6i12.prototype.bytesPerElement = 12;
register(StructArrayLayout6i12, 'StructArrayLayout6i12');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[4]
 * [8]: Uint16[4]
 * [16]: Int16[4]
 *
 * @private
 */
class StructArrayLayout4i4ui4i24 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number): number {
        const o2 = i * 12;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.uint16[o2 + 4] = v4;
        this.uint16[o2 + 5] = v5;
        this.uint16[o2 + 6] = v6;
        this.uint16[o2 + 7] = v7;
        this.int16[o2 + 8] = v8;
        this.int16[o2 + 9] = v9;
        this.int16[o2 + 10] = v10;
        this.int16[o2 + 11] = v11;
        return i;
    }
}

StructArrayLayout4i4ui4i24.prototype.bytesPerElement = 24;
register(StructArrayLayout4i4ui4i24, 'StructArrayLayout4i4ui4i24');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 * [8]: Float32[3]
 *
 * @private
 */
class StructArrayLayout3i3f20 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const o2 = i * 10;
        const o4 = i * 5;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.float32[o4 + 2] = v3;
        this.float32[o4 + 3] = v4;
        this.float32[o4 + 4] = v5;
        return i;
    }
}

StructArrayLayout3i3f20.prototype.bytesPerElement = 20;
register(StructArrayLayout3i3f20, 'StructArrayLayout3i3f20');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint32[1]
 *
 * @private
 */
class StructArrayLayout1ul4 extends StructArray {
    uint8: Uint8Array;
    uint32: Uint32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0);
    }

    emplace(i: number, v0: number): number {
        const o4 = i * 1;
        this.uint32[o4 + 0] = v0;
        return i;
    }
}

StructArrayLayout1ul4.prototype.bytesPerElement = 4;
register(StructArrayLayout1ul4, 'StructArrayLayout1ul4');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[5]
 * [12]: Float32[4]
 * [28]: Int16[1]
 * [32]: Uint32[1]
 * [36]: Uint16[2]
 *
 * @private
 */
class StructArrayLayout5i4f1i1ul2ui40 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    float32: Float32Array;
    uint32: Uint32Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number): number {
        const o2 = i * 20;
        const o4 = i * 10;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.float32[o4 + 3] = v5;
        this.float32[o4 + 4] = v6;
        this.float32[o4 + 5] = v7;
        this.float32[o4 + 6] = v8;
        this.int16[o2 + 14] = v9;
        this.uint32[o4 + 8] = v10;
        this.uint16[o2 + 18] = v11;
        this.uint16[o2 + 19] = v12;
        return i;
    }
}

StructArrayLayout5i4f1i1ul2ui40.prototype.bytesPerElement = 40;
register(StructArrayLayout5i4f1i1ul2ui40, 'StructArrayLayout5i4f1i1ul2ui40');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 * [8]: Int16[2]
 * [12]: Int16[2]
 *
 * @private
 */
class StructArrayLayout3i2i2i16 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const o2 = i * 8;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 4] = v3;
        this.int16[o2 + 5] = v4;
        this.int16[o2 + 6] = v5;
        this.int16[o2 + 7] = v6;
        return i;
    }
}

StructArrayLayout3i2i2i16.prototype.bytesPerElement = 16;
register(StructArrayLayout3i2i2i16, 'StructArrayLayout3i2i2i16');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[2]
 * [8]: Float32[1]
 * [12]: Int16[2]
 *
 * @private
 */
class StructArrayLayout2f1f2i16 extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;
    int16: Int16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const o4 = i * 4;
        const o2 = i * 8;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.int16[o2 + 6] = v3;
        this.int16[o2 + 7] = v4;
        return i;
    }
}

StructArrayLayout2f1f2i16.prototype.bytesPerElement = 16;
register(StructArrayLayout2f1f2i16, 'StructArrayLayout2f1f2i16');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint8[2]
 * [4]: Float32[2]
 *
 * @private
 */
class StructArrayLayout2ub2f12 extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number): number {
        const o1 = i * 12;
        const o4 = i * 3;
        this.uint8[o1 + 0] = v0;
        this.uint8[o1 + 1] = v1;
        this.float32[o4 + 1] = v2;
        this.float32[o4 + 2] = v3;
        return i;
    }
}

StructArrayLayout2ub2f12.prototype.bytesPerElement = 12;
register(StructArrayLayout2ub2f12, 'StructArrayLayout2ub2f12');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[3]
 *
 * @private
 */
class StructArrayLayout3f12 extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2);
    }

    emplace(i: number, v0: number, v1: number, v2: number): number {
        const o4 = i * 3;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        return i;
    }
}

StructArrayLayout3f12.prototype.bytesPerElement = 12;
register(StructArrayLayout3f12, 'StructArrayLayout3f12');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[3]
 *
 * @private
 */
class StructArrayLayout3ui6 extends StructArray {
    uint8: Uint8Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2);
    }

    emplace(i: number, v0: number, v1: number, v2: number): number {
        const o2 = i * 3;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        return i;
    }
}

StructArrayLayout3ui6.prototype.bytesPerElement = 6;
register(StructArrayLayout3ui6, 'StructArrayLayout3ui6');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 * [8]: Float32[2]
 * [16]: Uint16[2]
 * [20]: Uint32[3]
 * [32]: Uint16[3]
 * [40]: Float32[2]
 * [48]: Uint8[3]
 * [52]: Uint32[1]
 * [56]: Int16[1]
 * [58]: Uint8[1]
 *
 * @private
 */
class StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    float32: Float32Array;
    uint16: Uint16Array;
    uint32: Uint32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number, v16: number, v17: number, v18: number, v19: number, v20: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number, v16: number, v17: number, v18: number, v19: number, v20: number): number {
        const o2 = i * 30;
        const o4 = i * 15;
        const o1 = i * 60;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.float32[o4 + 2] = v3;
        this.float32[o4 + 3] = v4;
        this.uint16[o2 + 8] = v5;
        this.uint16[o2 + 9] = v6;
        this.uint32[o4 + 5] = v7;
        this.uint32[o4 + 6] = v8;
        this.uint32[o4 + 7] = v9;
        this.uint16[o2 + 16] = v10;
        this.uint16[o2 + 17] = v11;
        this.uint16[o2 + 18] = v12;
        this.float32[o4 + 10] = v13;
        this.float32[o4 + 11] = v14;
        this.uint8[o1 + 48] = v15;
        this.uint8[o1 + 49] = v16;
        this.uint8[o1 + 50] = v17;
        this.uint32[o4 + 13] = v18;
        this.int16[o2 + 28] = v19;
        this.uint8[o1 + 58] = v20;
        return i;
    }
}

StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60.prototype.bytesPerElement = 60;
register(StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60, 'StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 * [8]: Float32[2]
 * [16]: Int16[6]
 * [28]: Uint16[15]
 * [60]: Uint32[1]
 * [64]: Float32[3]
 *
 * @private
 */
class StructArrayLayout3i2f6i15ui1ul3f76 extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    float32: Float32Array;
    uint16: Uint16Array;
    uint32: Uint32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number, v16: number, v17: number, v18: number, v19: number, v20: number, v21: number, v22: number, v23: number, v24: number, v25: number, v26: number, v27: number, v28: number, v29: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number, v16: number, v17: number, v18: number, v19: number, v20: number, v21: number, v22: number, v23: number, v24: number, v25: number, v26: number, v27: number, v28: number, v29: number): number {
        const o2 = i * 38;
        const o4 = i * 19;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.float32[o4 + 2] = v3;
        this.float32[o4 + 3] = v4;
        this.int16[o2 + 8] = v5;
        this.int16[o2 + 9] = v6;
        this.int16[o2 + 10] = v7;
        this.int16[o2 + 11] = v8;
        this.int16[o2 + 12] = v9;
        this.int16[o2 + 13] = v10;
        this.uint16[o2 + 14] = v11;
        this.uint16[o2 + 15] = v12;
        this.uint16[o2 + 16] = v13;
        this.uint16[o2 + 17] = v14;
        this.uint16[o2 + 18] = v15;
        this.uint16[o2 + 19] = v16;
        this.uint16[o2 + 20] = v17;
        this.uint16[o2 + 21] = v18;
        this.uint16[o2 + 22] = v19;
        this.uint16[o2 + 23] = v20;
        this.uint16[o2 + 24] = v21;
        this.uint16[o2 + 25] = v22;
        this.uint16[o2 + 26] = v23;
        this.uint16[o2 + 27] = v24;
        this.uint16[o2 + 28] = v25;
        this.uint32[o4 + 15] = v26;
        this.float32[o4 + 16] = v27;
        this.float32[o4 + 17] = v28;
        this.float32[o4 + 18] = v29;
        return i;
    }
}

StructArrayLayout3i2f6i15ui1ul3f76.prototype.bytesPerElement = 76;
register(StructArrayLayout3i2f6i15ui1ul3f76, 'StructArrayLayout3i2f6i15ui1ul3f76');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[1]
 *
 * @private
 */
class StructArrayLayout1f4 extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0);
    }

    emplace(i: number, v0: number): number {
        const o4 = i * 1;
        this.float32[o4 + 0] = v0;
        return i;
    }
}

StructArrayLayout1f4.prototype.bytesPerElement = 4;
register(StructArrayLayout1f4, 'StructArrayLayout1f4');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[5]
 *
 * @private
 */
class StructArrayLayout5f20 extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const o4 = i * 5;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        this.float32[o4 + 4] = v4;
        return i;
    }
}

StructArrayLayout5f20.prototype.bytesPerElement = 20;
register(StructArrayLayout5f20, 'StructArrayLayout5f20');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint32[1]
 * [4]: Uint16[3]
 *
 * @private
 */
class StructArrayLayout1ul3ui12 extends StructArray {
    uint8: Uint8Array;
    uint32: Uint32Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3);
    }

    emplace(i: number, v0: number, v1: number, v2: number, v3: number): number {
        const o4 = i * 3;
        const o2 = i * 6;
        this.uint32[o4 + 0] = v0;
        this.uint16[o2 + 2] = v1;
        this.uint16[o2 + 3] = v2;
        this.uint16[o2 + 4] = v3;
        return i;
    }
}

StructArrayLayout1ul3ui12.prototype.bytesPerElement = 12;
register(StructArrayLayout1ul3ui12, 'StructArrayLayout1ul3ui12');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[2]
 *
 * @private
 */
class StructArrayLayout2ui4 extends StructArray {
    uint8: Uint8Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1);
    }

    emplace(i: number, v0: number, v1: number): number {
        const o2 = i * 2;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        return i;
    }
}

StructArrayLayout2ui4.prototype.bytesPerElement = 4;
register(StructArrayLayout2ui4, 'StructArrayLayout2ui4');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[1]
 *
 * @private
 */
class StructArrayLayout1ui2 extends StructArray {
    uint8: Uint8Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0);
    }

    emplace(i: number, v0: number): number {
        const o2 = i * 1;
        this.uint16[o2 + 0] = v0;
        return i;
    }
}

StructArrayLayout1ui2.prototype.bytesPerElement = 2;
register(StructArrayLayout1ui2, 'StructArrayLayout1ui2');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[2]
 *
 * @private
 */
class StructArrayLayout2f8 extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1);
    }

    emplace(i: number, v0: number, v1: number): number {
        const o4 = i * 2;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        return i;
    }
}

StructArrayLayout2f8.prototype.bytesPerElement = 8;
register(StructArrayLayout2f8, 'StructArrayLayout2f8');

class FillExtrusionExtStruct extends Struct {
    _structArray: FillExtrusionExtArray;
    get a_pos_30(): number { return this._structArray.int16[this._pos2 + 0]; }
    get a_pos_31(): number { return this._structArray.int16[this._pos2 + 1]; }
    get a_pos_32(): number { return this._structArray.int16[this._pos2 + 2]; }
    get a_pos_normal_30(): number { return this._structArray.int16[this._pos2 + 3]; }
    get a_pos_normal_31(): number { return this._structArray.int16[this._pos2 + 4]; }
    get a_pos_normal_32(): number { return this._structArray.int16[this._pos2 + 5]; }
}

FillExtrusionExtStruct.prototype.size = 12;

export type FillExtrusionExt = FillExtrusionExtStruct;

/**
 * @private
 */
export class FillExtrusionExtArray extends StructArrayLayout6i12 {
    /**
     * Return the FillExtrusionExtStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): FillExtrusionExtStruct {
        assert(!this.isTransferred);
        assert(index >= 0);
        assert(index < this.length);
        return new FillExtrusionExtStruct(this, index);
    }
}

register(FillExtrusionExtArray, 'FillExtrusionExtArray');

class CollisionBoxStruct extends Struct {
    _structArray: CollisionBoxArray;
    get projectedAnchorX(): number { return this._structArray.int16[this._pos2 + 0]; }
    get projectedAnchorY(): number { return this._structArray.int16[this._pos2 + 1]; }
    get projectedAnchorZ(): number { return this._structArray.int16[this._pos2 + 2]; }
    get tileAnchorX(): number { return this._structArray.int16[this._pos2 + 3]; }
    get tileAnchorY(): number { return this._structArray.int16[this._pos2 + 4]; }
    get x1(): number { return this._structArray.float32[this._pos4 + 3]; }
    get y1(): number { return this._structArray.float32[this._pos4 + 4]; }
    get x2(): number { return this._structArray.float32[this._pos4 + 5]; }
    get y2(): number { return this._structArray.float32[this._pos4 + 6]; }
    get padding(): number { return this._structArray.int16[this._pos2 + 14]; }
    get featureIndex(): number { return this._structArray.uint32[this._pos4 + 8]; }
    get sourceLayerIndex(): number { return this._structArray.uint16[this._pos2 + 18]; }
    get bucketIndex(): number { return this._structArray.uint16[this._pos2 + 19]; }
}

CollisionBoxStruct.prototype.size = 40;

export type CollisionBox = CollisionBoxStruct;

/**
 * @private
 */
export class CollisionBoxArray extends StructArrayLayout5i4f1i1ul2ui40 {
    /**
     * Return the CollisionBoxStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): CollisionBoxStruct {
        assert(!this.isTransferred);
        assert(index >= 0);
        assert(index < this.length);
        return new CollisionBoxStruct(this, index);
    }
}

register(CollisionBoxArray, 'CollisionBoxArray');

class PlacedSymbolStruct extends Struct {
    _structArray: PlacedSymbolArray;
    get projectedAnchorX(): number { return this._structArray.int16[this._pos2 + 0]; }
    get projectedAnchorY(): number { return this._structArray.int16[this._pos2 + 1]; }
    get projectedAnchorZ(): number { return this._structArray.int16[this._pos2 + 2]; }
    get tileAnchorX(): number { return this._structArray.float32[this._pos4 + 2]; }
    get tileAnchorY(): number { return this._structArray.float32[this._pos4 + 3]; }
    get glyphStartIndex(): number { return this._structArray.uint16[this._pos2 + 8]; }
    get numGlyphs(): number { return this._structArray.uint16[this._pos2 + 9]; }
    get vertexStartIndex(): number { return this._structArray.uint32[this._pos4 + 5]; }
    get lineStartIndex(): number { return this._structArray.uint32[this._pos4 + 6]; }
    get lineLength(): number { return this._structArray.uint32[this._pos4 + 7]; }
    get segment(): number { return this._structArray.uint16[this._pos2 + 16]; }
    get lowerSize(): number { return this._structArray.uint16[this._pos2 + 17]; }
    get upperSize(): number { return this._structArray.uint16[this._pos2 + 18]; }
    get lineOffsetX(): number { return this._structArray.float32[this._pos4 + 10]; }
    get lineOffsetY(): number { return this._structArray.float32[this._pos4 + 11]; }
    get writingMode(): number { return this._structArray.uint8[this._pos1 + 48]; }
    get placedOrientation(): number { return this._structArray.uint8[this._pos1 + 49]; }
    set placedOrientation(x: number) { this._structArray.uint8[this._pos1 + 49] = x; }
    get hidden(): number { return this._structArray.uint8[this._pos1 + 50]; }
    set hidden(x: number) { this._structArray.uint8[this._pos1 + 50] = x; }
    get crossTileID(): number { return this._structArray.uint32[this._pos4 + 13]; }
    set crossTileID(x: number) { this._structArray.uint32[this._pos4 + 13] = x; }
    get associatedIconIndex(): number { return this._structArray.int16[this._pos2 + 28]; }
    get flipState(): number { return this._structArray.uint8[this._pos1 + 58]; }
    set flipState(x: number) { this._structArray.uint8[this._pos1 + 58] = x; }
}

PlacedSymbolStruct.prototype.size = 60;

export type PlacedSymbol = PlacedSymbolStruct;

/**
 * @private
 */
export class PlacedSymbolArray extends StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60 {
    /**
     * Return the PlacedSymbolStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): PlacedSymbolStruct {
        assert(!this.isTransferred);
        assert(index >= 0);
        assert(index < this.length);
        return new PlacedSymbolStruct(this, index);
    }
}

register(PlacedSymbolArray, 'PlacedSymbolArray');

class SymbolInstanceStruct extends Struct {
    _structArray: SymbolInstanceArray;
    get projectedAnchorX(): number { return this._structArray.int16[this._pos2 + 0]; }
    get projectedAnchorY(): number { return this._structArray.int16[this._pos2 + 1]; }
    get projectedAnchorZ(): number { return this._structArray.int16[this._pos2 + 2]; }
    get tileAnchorX(): number { return this._structArray.float32[this._pos4 + 2]; }
    get tileAnchorY(): number { return this._structArray.float32[this._pos4 + 3]; }
    get rightJustifiedTextSymbolIndex(): number { return this._structArray.int16[this._pos2 + 8]; }
    get centerJustifiedTextSymbolIndex(): number { return this._structArray.int16[this._pos2 + 9]; }
    get leftJustifiedTextSymbolIndex(): number { return this._structArray.int16[this._pos2 + 10]; }
    get verticalPlacedTextSymbolIndex(): number { return this._structArray.int16[this._pos2 + 11]; }
    get placedIconSymbolIndex(): number { return this._structArray.int16[this._pos2 + 12]; }
    get verticalPlacedIconSymbolIndex(): number { return this._structArray.int16[this._pos2 + 13]; }
    get key(): number { return this._structArray.uint16[this._pos2 + 14]; }
    get textBoxStartIndex(): number { return this._structArray.uint16[this._pos2 + 15]; }
    get textBoxEndIndex(): number { return this._structArray.uint16[this._pos2 + 16]; }
    get verticalTextBoxStartIndex(): number { return this._structArray.uint16[this._pos2 + 17]; }
    get verticalTextBoxEndIndex(): number { return this._structArray.uint16[this._pos2 + 18]; }
    get iconBoxStartIndex(): number { return this._structArray.uint16[this._pos2 + 19]; }
    get iconBoxEndIndex(): number { return this._structArray.uint16[this._pos2 + 20]; }
    get verticalIconBoxStartIndex(): number { return this._structArray.uint16[this._pos2 + 21]; }
    get verticalIconBoxEndIndex(): number { return this._structArray.uint16[this._pos2 + 22]; }
    get featureIndex(): number { return this._structArray.uint16[this._pos2 + 23]; }
    get numHorizontalGlyphVertices(): number { return this._structArray.uint16[this._pos2 + 24]; }
    get numVerticalGlyphVertices(): number { return this._structArray.uint16[this._pos2 + 25]; }
    get numIconVertices(): number { return this._structArray.uint16[this._pos2 + 26]; }
    get numVerticalIconVertices(): number { return this._structArray.uint16[this._pos2 + 27]; }
    get useRuntimeCollisionCircles(): number { return this._structArray.uint16[this._pos2 + 28]; }
    get crossTileID(): number { return this._structArray.uint32[this._pos4 + 15]; }
    set crossTileID(x: number) { this._structArray.uint32[this._pos4 + 15] = x; }
    get textOffset0(): number { return this._structArray.float32[this._pos4 + 16]; }
    get textOffset1(): number { return this._structArray.float32[this._pos4 + 17]; }
    get collisionCircleDiameter(): number { return this._structArray.float32[this._pos4 + 18]; }
}

SymbolInstanceStruct.prototype.size = 76;

export type SymbolInstance = SymbolInstanceStruct;

/**
 * @private
 */
export class SymbolInstanceArray extends StructArrayLayout3i2f6i15ui1ul3f76 {
    /**
     * Return the SymbolInstanceStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): SymbolInstanceStruct {
        assert(!this.isTransferred);
        assert(index >= 0);
        assert(index < this.length);
        return new SymbolInstanceStruct(this, index);
    }
}

register(SymbolInstanceArray, 'SymbolInstanceArray');

/**
 * @private
 */
export class GlyphOffsetArray extends StructArrayLayout1f4 {
    getoffsetX(index: number): number { return this.float32[index * 1 + 0]; }
}

register(GlyphOffsetArray, 'GlyphOffsetArray');

/**
 * @private
 */
export class SymbolLineVertexArray extends StructArrayLayout3i6 {
    getx(index: number): number { return this.int16[index * 3 + 0]; }
    gety(index: number): number { return this.int16[index * 3 + 1]; }
    gettileUnitDistanceFromAnchor(index: number): number { return this.int16[index * 3 + 2]; }
}

register(SymbolLineVertexArray, 'SymbolLineVertexArray');

class FeatureIndexStruct extends Struct {
    _structArray: FeatureIndexArray;
    get featureIndex(): number { return this._structArray.uint32[this._pos4 + 0]; }
    get sourceLayerIndex(): number { return this._structArray.uint16[this._pos2 + 2]; }
    get bucketIndex(): number { return this._structArray.uint16[this._pos2 + 3]; }
    get layoutVertexArrayOffset(): number { return this._structArray.uint16[this._pos2 + 4]; }
}

FeatureIndexStruct.prototype.size = 12;

export type FeatureIndex = FeatureIndexStruct;

/**
 * @private
 */
export class FeatureIndexArray extends StructArrayLayout1ul3ui12 {
    /**
     * Return the FeatureIndexStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): FeatureIndexStruct {
        assert(!this.isTransferred);
        assert(index >= 0);
        assert(index < this.length);
        return new FeatureIndexStruct(this, index);
    }
}

register(FeatureIndexArray, 'FeatureIndexArray');

class FillExtrusionCentroidStruct extends Struct {
    _structArray: FillExtrusionCentroidArray;
    get a_centroid_pos0(): number { return this._structArray.uint16[this._pos2 + 0]; }
    get a_centroid_pos1(): number { return this._structArray.uint16[this._pos2 + 1]; }
}

FillExtrusionCentroidStruct.prototype.size = 4;

export type FillExtrusionCentroid = FillExtrusionCentroidStruct;

/**
 * @private
 */
export class FillExtrusionCentroidArray extends StructArrayLayout2ui4 {
    /**
     * Return the FillExtrusionCentroidStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): FillExtrusionCentroidStruct {
        assert(!this.isTransferred);
        assert(index >= 0);
        assert(index < this.length);
        return new FillExtrusionCentroidStruct(this, index);
    }
}

register(FillExtrusionCentroidArray, 'FillExtrusionCentroidArray');

class CircleGlobeExtStruct extends Struct {
    _structArray: CircleGlobeExtArray;
    get a_pos_30(): number { return this._structArray.int16[this._pos2 + 0]; }
    get a_pos_31(): number { return this._structArray.int16[this._pos2 + 1]; }
    get a_pos_32(): number { return this._structArray.int16[this._pos2 + 2]; }
    get a_pos_normal_30(): number { return this._structArray.int16[this._pos2 + 3]; }
    get a_pos_normal_31(): number { return this._structArray.int16[this._pos2 + 4]; }
    get a_pos_normal_32(): number { return this._structArray.int16[this._pos2 + 5]; }
}

CircleGlobeExtStruct.prototype.size = 12;

export type CircleGlobeExt = CircleGlobeExtStruct;

/**
 * @private
 */
export class CircleGlobeExtArray extends StructArrayLayout6i12 {
    /**
     * Return the CircleGlobeExtStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): CircleGlobeExtStruct {
        assert(!this.isTransferred);
        assert(index >= 0);
        assert(index < this.length);
        return new CircleGlobeExtStruct(this, index);
    }
}

register(CircleGlobeExtArray, 'CircleGlobeExtArray');

export {
    StructArrayLayout2i4,
    StructArrayLayout3i6,
    StructArrayLayout4i8,
    StructArrayLayout2i4ub1f12,
    StructArrayLayout4f16,
    StructArrayLayout10ui20,
    StructArrayLayout8ui16,
    StructArrayLayout6i12,
    StructArrayLayout4i4ui4i24,
    StructArrayLayout3i3f20,
    StructArrayLayout1ul4,
    StructArrayLayout5i4f1i1ul2ui40,
    StructArrayLayout3i2i2i16,
    StructArrayLayout2f1f2i16,
    StructArrayLayout2ub2f12,
    StructArrayLayout3f12,
    StructArrayLayout3ui6,
    StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60,
    StructArrayLayout3i2f6i15ui1ul3f76,
    StructArrayLayout1f4,
    StructArrayLayout5f20,
    StructArrayLayout1ul3ui12,
    StructArrayLayout2ui4,
    StructArrayLayout1ui2,
    StructArrayLayout2f8,
    StructArrayLayout2i4 as PosArray,
    StructArrayLayout3i6 as PosGlobeExtArray,
    StructArrayLayout4i8 as RasterBoundsArray,
    StructArrayLayout2i4 as CircleLayoutArray,
    StructArrayLayout2i4 as FillLayoutArray,
    StructArrayLayout4i8 as FillExtrusionLayoutArray,
    StructArrayLayout2i4 as HeatmapLayoutArray,
    StructArrayLayout2i4ub1f12 as LineLayoutArray,
    StructArrayLayout4f16 as LineExtLayoutArray,
    StructArrayLayout10ui20 as PatternLayoutArray,
    StructArrayLayout8ui16 as DashLayoutArray,
    StructArrayLayout4i4ui4i24 as SymbolLayoutArray,
    StructArrayLayout3i3f20 as SymbolGlobeExtArray,
    StructArrayLayout4f16 as SymbolDynamicLayoutArray,
    StructArrayLayout1ul4 as SymbolOpacityArray,
    StructArrayLayout3i2i2i16 as CollisionBoxLayoutArray,
    StructArrayLayout2f1f2i16 as CollisionCircleLayoutArray,
    StructArrayLayout2ub2f12 as CollisionVertexArray,
    StructArrayLayout3f12 as CollisionVertexExtArray,
    StructArrayLayout3ui6 as QuadTriangleArray,
    StructArrayLayout5f20 as GlobeVertexArray,
    StructArrayLayout5f20 as AtmosphereVertexArray,
    StructArrayLayout3ui6 as TriangleIndexArray,
    StructArrayLayout2ui4 as LineIndexArray,
    StructArrayLayout1ui2 as LineStripIndexArray,
    StructArrayLayout3f12 as SkyboxVertexArray,
    StructArrayLayout4i8 as TileBoundsArray
};
