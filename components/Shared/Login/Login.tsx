"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

// 🔹 Schema de validación con Zod
const loginSchema = z.object({
  cx_email: z.string().email("Ingresa un correo válido"),
  cx_password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      cx_email: "",
      cx_password: "",
    },
  });

  // Simulación de petición a la API
  const onSubmit = async (values: LoginFormValues) => {
    setServerError(null);
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Error en el inicio de sesión");
      }

      const data = await res.json();
      console.log("✅ Sesión iniciada:", data);

      // Aquí podrías guardar token, redirigir, etc.
    } catch (error: any) {
      setServerError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-2xl shadow-md bg-white">
      <h2 className="text-2xl font-bold text-center mb-2">Iniciar Sesión</h2>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Ingresa tus datos o utiliza una cuenta social
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="cx_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input placeholder="ejemplo@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
    
          {/* Password */}
          <FormField
            control={form.control}
            name="cx_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Error del servidor */}
          {serverError && (
            <p className="text-red-500 text-sm">{serverError}</p>
          )}

          {/* Botón de login */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Iniciando...
              </>
            ) : (
              "Ingresar"
            )}
          </Button>
        </form>
      </Form>

      {/* Recuperar contraseña y registro */}
      <div className="flex justify-between mt-3 text-sm">
        <button className="text-blue-600 hover:underline">¿Olvidaste tu contraseña?</button>
        <button className="text-blue-600 hover:underline">Crear cuenta</button>
      </div>

      {/* Divider */}
      <div className="flex items-center my-4">
        <Separator className="flex-1" />
        <span className="px-2 text-xs text-muted-foreground">o continúa con</span>
        <Separator className="flex-1" />
      </div>

      {/* Botones sociales */}
      <div className="flex flex-col gap-2">
        <Button variant="outline" className="w-full flex items-center gap-2">
          <FcGoogle size={20} /> Google
        </Button>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <FaMicrosoft size={20} className="text-blue-600" /> Microsoft
        </Button>
      </div>
    </div>
  );
}
