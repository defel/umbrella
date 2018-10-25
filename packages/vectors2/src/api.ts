import {
    ICopy,
    IEmpty,
    IEqualsDelta,
    ILength
} from "@thi.ng/api";
import { atan2Abs } from "@thi.ng/math/angle";
import { EPS } from "@thi.ng/math/api";
import { repeatedly } from "@thi.ng/transducers/iter/repeatedly";
import { vop } from "./vop";

// suffix convention:
// V = vector arg
// N = numeric / scalar arg
// Ro = readonly

export type VecOpV<T> = (a: Vec, ...xs: any[]) => T;
export type VecOpVV<T> = (a: Vec, b: Readonly<Vec>) => T;
export type VecOpVN<T> = (a: Vec, n: number) => T;
export type VecOpVNN<T> = (a: Vec, n: number, m: number) => T;
export type VecOpVVN<T> = (a: Vec, b: Readonly<Vec>, n: number) => T;
export type VecOpVVV<T> = (a: Vec, b: Readonly<Vec>, c: Readonly<Vec>) => T;

export type VecOpNewVN<T> = (a: Vec, n: number, o?: T) => T;
export type VecOpNewVV<T> = (a: Vec, b: Readonly<Vec>, o?: T) => T;
export type VecOpNewVVN<T> = (a: Vec, b: Readonly<Vec>, n: number, o?: T) => T;
export type VecOpNewVVV<T> = (a: Vec, b: Readonly<Vec>, c: Readonly<Vec>, o?: T) => T;

export type VecOpRoV<T> = (a: Readonly<Vec>, ...xs: any[]) => T;
export type VecOpRoVV<T> = (a: Readonly<Vec>, b: Readonly<Vec>, ...xs: any[]) => T;
export type VecOpRoVVV<T> = (a: Readonly<Vec>, b: Readonly<Vec>, c: Readonly<Vec>, ...xs: any[]) => T;

export interface MultiVecOp<VOP> {
    add(dim: number, op: VOP);
    default(op: VOP);
}

export interface MultiVecOpV<T> extends VecOpV<T>, MultiVecOp<VecOpV<T>> { }
export interface MultiVecOpVV<T> extends VecOpVV<T>, MultiVecOp<VecOpVV<T>> { }
export interface MultiVecOpVN<T> extends VecOpVN<T>, MultiVecOp<VecOpVN<T>> { }
export interface MultiVecOpVNN<T> extends VecOpVNN<T>, MultiVecOp<VecOpVNN<T>> { }
export interface MultiVecOpVVN<T> extends VecOpVVN<T>, MultiVecOp<VecOpVVN<T>> { }
export interface MultiVecOpVVV<T> extends VecOpVVV<T>, MultiVecOp<VecOpVVV<T>> { }

export interface MultiVecOpNewVV<T> extends VecOpNewVV<T>, MultiVecOp<VecOpNewVV<T>> { }
export interface MultiVecOpNewVN<T> extends VecOpNewVN<T>, MultiVecOp<VecOpNewVN<T>> { }
export interface MultiVecOpNewVVN<T> extends VecOpNewVVN<T>, MultiVecOp<VecOpNewVVN<T>> { }
export interface MultiVecOpNewVVV<T> extends VecOpNewVVV<T>, MultiVecOp<VecOpNewVVV<T>> { }

export interface MultiVecOpRoV<T> extends VecOpRoV<T>, MultiVecOp<VecOpRoV<T>> { }
export interface MultiVecOpRoVV<T> extends VecOpRoVV<T>, MultiVecOp<VecOpRoVV<T>> { }
export interface MultiVecOpRoVVV<T> extends VecOpRoVVV<T>, MultiVecOp<VecOpRoVVV<T>> { }

export interface Vec extends
    Iterable<number>,
    ILength {

    [id: number]: number;
}

export interface IVector<T> extends
    Vec,
    ICopy<T>,
    IEmpty<T>,
    IEqualsDelta<T> {

    i: number;
    s: number;
}

export type Vec2Coord = 0 | 1;
export type Vec3Coord = 0 | 1 | 2;
export type Vec4Coord = 0 | 1 | 2 | 3;

export const set: MultiVecOpVV<Vec> = vop();
export const setN: MultiVecOpVN<Vec> = vop();
export const setS: MultiVecOpV<Vec> = vop();
export const copy: MultiVecOpV<Vec> = vop();
copy.default((v) => [...v]);

export const zero = (a: Vec) => setN(a, 0);
export const one = (a: Vec) => setN(a, 1);

export const eqDelta: MultiVecOpRoVV<boolean> = vop();

export const rand: MultiVecOpVNN<Vec> = vop();
export const rand01: MultiVecOpV<Vec> = vop();
export const rand11: MultiVecOpV<Vec> = vop();

export const [add, sub, mul, div]: MultiVecOpVV<Vec>[]
    = [...repeatedly(vop, 4)];
export const [addNew, subNew, mulNew, divNew]: MultiVecOpNewVV<Vec>[]
    = [...repeatedly(vop, 4)];
export const [addN, subN, mulN, divN]: MultiVecOpVN<Vec>[]
    = [...repeatedly(vop, 4)];
export const [addNewN, subNewN, mulNewN, divNewN]: MultiVecOpNewVN<Vec>[]
    = [...repeatedly(vop, 4)];

export const neg: MultiVecOpV<Vec> = vop();
neg.default((v) => mulN(v, -1));

export const madd: MultiVecOpVVV<Vec> = vop();
export const maddN: MultiVecOpVVN<Vec> = vop();
export const maddNew: MultiVecOpNewVVV<Vec> = vop();
export const maddNewN: MultiVecOpNewVVN<Vec> = vop();

export const dot: MultiVecOpRoVV<number> = vop();

export const magSq: MultiVecOpRoV<number> = vop();
export const mag: MultiVecOpRoV<number> = vop();
mag.default((a) => Math.sqrt(magSq(a, a)));

export const normalize: MultiVecOpV<Vec> = vop();
normalize.default((v, n: number) => {
    let m = mag(v);
    return m >= EPS ? mulN(v, n / m) : v;
});

export const limit: MultiVecOpV<Vec> = vop();
limit.default((v, n: number) => {
    let m = mag(v);
    return m > n ? mulN(v, n / m) : v;
});

export const distSq: MultiVecOpVV<number> = vop();
export const dist: MultiVecOpVV<number> = vop();
dist.default((a, b) => Math.sqrt(distSq(a, b)));

export const distManhattan: MultiVecOpRoVV<number> = vop();
export const distChebyshev: MultiVecOpRoVV<number> = vop();

export const abs: MultiVecOpV<Vec> = vop();
export const sign: MultiVecOpV<Vec> = vop();
export const sin: MultiVecOpV<Vec> = vop();
export const cos: MultiVecOpV<Vec> = vop();
export const sqrt: MultiVecOpV<Vec> = vop();
export const floor: MultiVecOpV<Vec> = vop();
export const ceil: MultiVecOpV<Vec> = vop();
export const fract: MultiVecOpV<Vec> = vop();
export const trunc: MultiVecOpV<Vec> = vop();
export const log: MultiVecOpV<Vec> = vop();
export const exp: MultiVecOpV<Vec> = vop();
export const pow: MultiVecOpVV<Vec> = vop();
export const powN: MultiVecOpVN<Vec> = vop();

export const min: MultiVecOpVV<Vec> = vop();
export const max: MultiVecOpVV<Vec> = vop();
export const clamp: MultiVecOpVVV<Vec> = vop();
clamp.default((a, b, c) => min(max(a, b), c));

export const minor: MultiVecOpV<number> = vop();
export const major: MultiVecOpV<number> = vop();

export const mix: MultiVecOpVVV<Vec> = vop();
export const mixN: MultiVecOpVVN<Vec> = vop();
export const mixNew: MultiVecOpNewVVV<Vec> = vop();
export const mixNewN: MultiVecOpNewVVN<Vec> = vop();

export const step: MultiVecOpVV<Vec> = vop();
export const smoothStep: MultiVecOpVVV<Vec> = vop();

const _rotate = (u: number, v: number): VecOpVN<Vec> =>
    (a: Vec, theta: number) => {
        const s = Math.sin(theta);
        const c = Math.cos(theta);
        const x = a[u];
        const y = a[v];
        a[u] = x * c - y * s;
        a[v] = x * s + y * c;
        return a;
    };

export const rotateX = _rotate(1, 2);
export const rotateY = _rotate(2, 0);
export const rotateZ = _rotate(0, 1);

export const polar: MultiVecOpV<Vec> = vop();
export const cartesian: MultiVecOpV<Vec> = vop();

export const reflect: VecOpVV<Vec> =
    (a, b) => maddN(a, b, -2 * dot(a, b));

export const refract: VecOpVVN<Vec> =
    (a, n, eta) => {
        const d = dot(a, n);
        const k = 1 - eta * eta * (1 - d * d);
        return k < 0 ?
            zero(a) :
            maddN(mulN(a, eta), n, -(eta * d + Math.sqrt(k)));
    };

export const headingXY = (a: Readonly<Vec>) => atan2Abs(a[1], a[0]);
export const headingXZ = (a: Readonly<Vec>) => atan2Abs(a[2], a[0]);
export const headingYZ = (a: Readonly<Vec>) => atan2Abs(a[2], a[1]);

export const angleRatio =
    (a: Readonly<Vec>, b: Readonly<Vec>) =>
        dot(a, b) / (mag(a) * mag(b));

export const angleBetween: MultiVecOpRoVV<number> = vop();

const mi = -Infinity;
const mx = Infinity;
export const MIN4 = Object.freeze([mi, mi, mi, mi]);
export const MAX4 = Object.freeze([mx, mx, mx, mx]);
export const ONE4 = Object.freeze([1, 1, 1, 1]);
export const ZERO4 = Object.freeze([0, 0, 0, 0]);
export const X4 = Object.freeze([1, 0, 0, 0]);
export const Y4 = Object.freeze([0, 1, 0, 0]);
export const Z4 = Object.freeze([0, 0, 1, 0]);
export const W4 = Object.freeze([0, 0, 0, 1]);
