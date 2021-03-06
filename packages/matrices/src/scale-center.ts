import { neg, ReadonlyVec } from "@thi.ng/vectors";
import { Mat } from "./api";
import { concat } from "./concat";
import { scale23, scale44 } from "./scale";
import { translation23, translation44 } from "./translation";

/**
 * Computes a M23 representing a scale operation with origin `p` and
 * writes result to `out`.
 *
 * @param out
 * @param m
 */
export const scaleWithCenter23 = (
    m: Mat,
    p: ReadonlyVec,
    s: number | ReadonlyVec
) =>
    concat(
        m,
        translation23([], p),
        scale23([], s),
        translation23([], neg([], p))
    );

/**
 * Computes a M44 representing a scale operation with origin `p` and
 * writes result to `out`.
 *
 * @param out
 * @param m
 */
export const scaleWithCenter44 = (
    m: Mat,
    p: ReadonlyVec,
    s: number | ReadonlyVec
) =>
    concat(
        m,
        translation44([], p),
        scale44([], s),
        translation44([], neg([], p))
    );
