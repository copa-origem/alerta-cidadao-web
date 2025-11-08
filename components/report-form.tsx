"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ImageIcon, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

const formSchema = z.object({
  setoresImpactados: z.string().min(1, "Selecione um setor"),
  tipoInconformidade: z.string().min(1, "Selecione o tipo de inconformidade"),
  descricao: z.string().min(10, "Descrição deve ter no mínimo 10 caracteres"),
})

export function ReportForm() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      setoresImpactados: "",
      tipoInconformidade: "",
      descricao: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("[v0] Form submitted:", values)
    // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Map Section */}
        <Card className="flex min-h-32 items-center justify-center border-2 border-dashed">
          <div className="text-center">
            <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
            <p className="text-sm font-medium">Mapa da Cidade</p>
            <p className="text-xs text-muted-foreground">Pré-carregado</p>
            <p className="mt-1 text-xs text-muted-foreground">(possibilidade de selecionar o ponto no mapa)</p>
          </div>
        </Card>

        {/* Setores Impactados - FIRST */}
        <FormField
          control={form.control}
          name="setoresImpactados"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Setores Impactados</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="infraestrutura">Infraestrutura</SelectItem>
                  <SelectItem value="saude">Saúde</SelectItem>
                  <SelectItem value="educacao">Educação</SelectItem>
                  <SelectItem value="transporte">Transporte</SelectItem>
                  <SelectItem value="meio-ambiente">Meio Ambiente</SelectItem>
                  <SelectItem value="seguranca">Segurança</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tipo de Inconformidade - SECOND */}
        <FormField
          control={form.control}
          name="tipoInconformidade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Inconformidade</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="buraco-via">Buraco na via</SelectItem>
                  <SelectItem value="iluminacao">Iluminação pública</SelectItem>
                  <SelectItem value="lixo">Acúmulo de lixo</SelectItem>
                  <SelectItem value="calcada">Calçada danificada</SelectItem>
                  <SelectItem value="sinalizacao">Sinalização</SelectItem>
                  <SelectItem value="vazamento">Vazamento</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Descrição */}
        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea placeholder="Descreva a ocorrência..." className="min-h-32 resize-none pr-12" {...field} />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="absolute bottom-2 right-2 h-8 w-8"
                    onClick={() => {
                      // Handle image upload
                      console.log("[v0] Image upload clicked")
                    }}
                  >
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" size="lg" className="mt-2 h-14 text-base font-bold">
          Enviar Denúncia
        </Button>
      </form>
    </Form>
  )
}
