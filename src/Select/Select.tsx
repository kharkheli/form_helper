import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import {
  Container,
  OptionsContainer,
  SingleOption,
  Indicator,
  LoadingContainer,
} from "./style";
import { Props, Option } from "./types";
import ReactLoading from "react-loading";
import { IoIosArrowDown } from "react-icons/io";

export default function Select({ options, loading, disabled }: Props) {
  const [focused, setFocused] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = useMemo(() => {
    return options.filter((option: Option) =>
      option.label.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  }, [options, inputValue]);

  return (
    <Container
      bg="#fff"
      className="hello"
      outline={true}
      onClick={() => {
        if (disabled) return;
        inputRef.current?.focus();
        setFocused(true);
      }}
    >
      <input
        ref={inputRef}
        type="text"
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Select..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {loading && (
        <LoadingContainer>
          <ReactLoading type="bubbles" color="#ccc" height={30} width={30} />
        </LoadingContainer>
      )}
      <Indicator focused={focused}>
        <IoIosArrowDown />
      </Indicator>

      <OptionsContainer display={focused}>
        {loading ? (
          <SingleOption
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ReactLoading type="bubbles" color="#fff" height={30} width={30} />
          </SingleOption>
        ) : filteredOptions.length > 0 ? (
          filteredOptions.map((option: Option) => {
            return (
              <SingleOption key={option.value}>{option.label}</SingleOption>
            );
          })
        ) : (
          <SingleOption>No options</SingleOption>
        )}
      </OptionsContainer>
    </Container>
  );
}
