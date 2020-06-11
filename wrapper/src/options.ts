import type { DataType } from "tractjs-core";
type Format = "onnx" | "tensorflow";
type Shape = Array<number>;

type Fact = [DataType, Shape];

/**
 * Model loading options.
 */
type Options = {
  /**
   * The model format. Either `"onnx"` or `"tensorflow"`. If undefined, will attempt to infer from URL file extension.
   */
  format?: Format;
  /**
   * The node names of model inputs. Passed to [`set_input_names`](https://docs.rs/tract-core/__tractVersion__/tract_core/model/struct.ModelImpl.html#method.set_input_names).
   */
  inputs?: Array<string>;
  /**
   * The node names of model outputs. Passed to [`set_output_names`](https://docs.rs/tract-core/__tractVersion__/tract_core/model/struct.ModelImpl.html#method.set_output_names).
   */
  outputs?: Array<string>;
  /**
   * Mapping of indices to facts to set for the input. Each fact is passed to [`set_input_fact`](https://docs.rs/tract-core/__tractVersion__/tract_core/model/struct.ModelImpl.html#method.set_input_fact).
   */
  inputFacts?: Record<number, Fact>;
};

type InternalOptions = {
  format: Format;
  inputs?: Array<string>;
  outputs?: Array<string>;
  inputFacts: Record<number, Fact>;
};

export { Format, Options, InternalOptions };