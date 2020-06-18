// Generated by dts-bundle-generator v4.3.0

export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
export type DataType = "int8" | "uint8" | "int16" | "uint16" | "int32" | "uint32" | "float32" | "float64";
/**
 * A Tensor. The standard input and output type.
 *
 * Defined by a [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) and a shape.
 *
 * Data is stored in standard order i. e. `new Tensor(new Float32Array([1, 2, 3, 4]), [2, 2])` is comparable to `[[1, 2], [3, 4]]`.
 */
export declare class Tensor {
	data: TypedArray;
	shape: number[];
	constructor(data: TypedArray, shape: number[]);
}
export declare type Format = "onnx" | "tensorflow";
export declare type Shape = Array<number>;
export declare type Fact = [DataType, Shape];
/**
 * Model loading options.
 */
export declare type Options = {
	/**
	 * The model format. Either `"onnx"` or `"tensorflow"`. If undefined, will attempt to infer from URL file extension.
	 */
	format?: Format;
	/**
	 * Whether to optimize the model. Currently only works if the input shape is fully determined. If you need e. g. dynamic batch sizes set this to `false`. `true` by default.
	 */
	optimize?: boolean;
	/**
	 * The node names of model inputs. Passed to [`set_input_names`](https://docs.rs/tract-core/0.9.1/tract_core/model/struct.ModelImpl.html#method.set_input_names).
	 */
	inputs?: Array<string>;
	/**
	 * The node names of model outputs. Passed to [`set_output_names`](https://docs.rs/tract-core/0.9.1/tract_core/model/struct.ModelImpl.html#method.set_output_names).
	 */
	outputs?: Array<string>;
	/**
	 * Mapping of indices to facts to set for the input. Each fact is passed to [`set_input_fact`](https://docs.rs/tract-core/0.9.1/tract_core/model/struct.ModelImpl.html#method.set_input_fact).
	 */
	inputFacts?: Record<number, Fact>;
};
/**
 * A Tensorflow or ONNX model.
 *
 * Does not store the model directly.
 * The model is stored in a WebWorker which this class internally accesses via an ID.
 */
export declare class Model {
	private modelId;
	/**
	 * Loads a model.
	 * @param url - The URL to load the model from. Will be passed to `fetch`.
	 * @param options - Additional options. See {@link Options} for details.
	 */
	constructor(url: string, options?: Options);
	/**
	 * Runs the model on the given input.
	 * The first call might be slower because it has to wait for model initialization to finish.
	 * @param tensors - List of input tensors.
	 *
	 * @returns Promise for a list of output tensors.
	 */
	predict(inputs: Tensor[]): Promise<Tensor[]>;
	/**
	 * Removes all references to the internal model allowing it to be garbage collected.
	 */
	destroy(): Promise<void>;
}

export {};
