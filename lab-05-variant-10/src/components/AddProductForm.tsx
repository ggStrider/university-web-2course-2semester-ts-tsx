import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, "Назва має бути не коротше 2 символів"),
  price: z
    .number({ invalid_type_error: "Ціна має бути числом" })
    .positive("Ціна має бути позитивним числом"),
  description: z.string().min(10, "Опис має бути не коротше 10 символів"),
  inStock: z.boolean(),
});

type FormData = z.infer<typeof schema>;

const fieldStyle = (hasError: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "8px 12px",
  backgroundColor: "#121212",
  color: "#fff",
  border: `1px solid ${hasError ? "#f44336" : "#333"}`,
  borderRadius: "6px",
  fontSize: "14px",
  boxSizing: "border-box",
});

const errorStyle: React.CSSProperties = {
  color: "#f44336",
  fontSize: "12px",
  marginTop: "4px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "6px",
  fontSize: "13px",
  color: "#aaa",
};

export const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{
      backgroundColor: "#212121",
      borderRadius: "12px",
      padding: "32px",
      width: "400px",
    }}>
      <h2 style={{ color: "#fff", margin: "0 0 24px 0", fontSize: "18px", fontWeight: 700 }}>
        Додати товар
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* Назва */}
        <div>
          <label htmlFor="name" style={labelStyle}>Назва</label>
          <input
            id="name"
            type="text"
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
            style={fieldStyle(!!errors.name)}
          />
          {errors.name && (
            <span id="name-error" role="alert" style={errorStyle}>
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Ціна */}
        <div>
          <label htmlFor="price" style={labelStyle}>Ціна (₴)</label>
          <input
            id="price"
            type="number"
            step="0.01"
            {...register("price", { valueAsNumber: true })}
            aria-invalid={errors.price ? "true" : "false"}
            aria-describedby="price-error"
            style={fieldStyle(!!errors.price)}
          />
          {errors.price && (
            <span id="price-error" role="alert" style={errorStyle}>
              {errors.price.message}
            </span>
          )}
        </div>

        {/* Опис */}
        <div>
          <label htmlFor="description" style={labelStyle}>Опис</label>
          <textarea
            id="description"
            {...register("description")}
            aria-invalid={errors.description ? "true" : "false"}
            aria-describedby="description-error"
            rows={3}
            style={{ ...fieldStyle(!!errors.description), resize: "vertical" }}
          />
          {errors.description && (
            <span id="description-error" role="alert" style={errorStyle}>
              {errors.description.message}
            </span>
          )}
        </div>

        {/* В наявності */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            id="inStock"
            type="checkbox"
            {...register("inStock")}
            style={{ width: "16px", height: "16px", cursor: "pointer" }}
          />
          <label htmlFor="inStock" style={{ ...labelStyle, margin: 0, cursor: "pointer" }}>
            В наявності
          </label>
        </div>

        <button
          type="submit"
          disabled={!isValid}
          style={{
            padding: "12px",
            backgroundColor: isValid ? "#fff" : "#333",
            color: isValid ? "#0f0f0f" : "#666",
            border: "none",
            borderRadius: "6px",
            cursor: isValid ? "pointer" : "default",
            fontWeight: 700,
            fontSize: "14px",
            marginTop: "8px",
          }}
        >
          Додати товар
        </button>

      </form>
    </div>
  );
};
