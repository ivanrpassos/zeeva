import { RiQuestionAnswerLine } from '@remixicon/react'
import { useState } from 'react'

import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const steps = [
  {
    id: '01',
    name: 'Contato',
    fields: ['name', 'email', 'phone', 'position']
  },
  {
    id: '02',
    name: 'Negócio',
    fields: ['businessName', 'uf', 'aboutBusiness', 'links']
  },
  {
    id: '03',
    name: 'Projeto',
    fields: ['endDate', 'endDateDesc', 'projectImportant', 'projectSuccess', 'businessCategory', 'productsAndServices', 'whyMe', 'howFoundMe', 'moreInfos']
  }
]

const ContactFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório').nonempty(),
  email: z.string().email().min(1, 'O e-mail é obrigatório').nonempty(),
  phone: z.string().min(1, 'O número de telefone é obrigatório').nonempty(),
  position: z.string().min(1, 'O seu cargo na empresa é obrigatório').nonempty(),
  businessName: z.string().nonempty(),
  uf: z.string().min(1, 'O estado de onde mora, é obrigatório').nonempty(),
  aboutBusiness: z.string().nonempty(),
  links: z.string().nonempty(),
  endDate: z.string().nonempty(),
  endDateDesc: z.string().nonempty(),
  projectImportant: z.string().nonempty(),
  projectSuccess: z.string().nonempty(),
  businessCategory: z.string().nonempty(),
  productsAndServices: z.string().nonempty(),
  whyMe: z.string().nonempty(),
  howFoundMe: z.string().nonempty(),
  moreInfos: z.string().nonempty(),
})

type Inputs = z.infer<typeof ContactFormSchema>

type FieldName = keyof Inputs

export const Contact = () => {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm: SubmitHandler<Inputs> = data => {
    api.post('', data)
      .then(() => {
        console.log(data, 'Fomulário enviado com sucesso!')
        reset()
      })
      .catch(() => {
        console.log('Formulário não enviado!')
      })
  }

  const next = async () => {
    const fields = steps[currentStep].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
      }
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }

  return (
    <section className='container flex items-start gap-[200px] pt-52 sm:pt-32'>
      {/* Left */}
      <div className='w-fit sm:hidden'>
        <RiQuestionAnswerLine className='size-16' />
      </div>

      {/* Right */}
      <article className='flex w-full flex-col gap-20 sm:gap-16'>
        {/* Top */}
        <div className='flex items-end justify-between'>
          {/* Title */}
          <h1 className='w-[620px] text-5xl/tight font-medium sm:w-full sm:text-3xl/tight'>
            Grandes negócios são feitos a partir desse formulário!
          </h1>

          {/* Status */}
          <div className='flex items-center justify-center gap-2'>
            {/* {data?.client.available ? (
              <>
                <div className="relative">
                  <div className="animate-ping absolute inline-flex size-[10px] rounded-full bg-green-500 opacity-75" />
                  <div className="relative size-[10px] rounded-full bg-green-500" />
                </div>

                <span className="text-xl/normal text-green-600">
                  Agenda aberta, solicite seu orçamento
                </span>
              </>
            ) : (
              <>
                <div className="relative">
                  <div className="animate-ping absolute inline-flex size-[10px] rounded-full bg-red-500 opacity-75" />
                  <div className="relative size-[10px] rounded-full bg-red-500" />
                </div>

                <span className="text-xl/normal text-red-600">
                  Por hora, indisponível!
                </span>
              </>
            )} */}
          </div>
        </div>

        {/* Bottom */}
        <div className='flex w-full flex-col gap-20 sm:gap-14'>
          {/* Steps */}
          <nav className='flex w-full flex-col gap-2'>
            {/* Top */}
            <div className='flex w-full items-center gap-4'>
              {
                currentStep === 0 ? (
                  <div className='flex h-14 min-w-14 sm:h-12 sm:min-w-12 items-center justify-center bg-black text-white'>
                    <span className='text-xl/none font-medium sm:text-base'>01</span>
                  </div>
                ) : (
                  <div className='flex h-14 min-w-14 sm:h-12 sm:min-w-12 items-center justify-center bg-neutral-100'>
                    <span className='text-xl/none font-medium sm:text-base'>01</span>
                  </div>
                )
              }

              <hr className='w-full border-neutral-200' />

              {
                currentStep === 1 ? (
                  <div className='flex h-14 min-w-14 sm:h-12 sm:min-w-12 items-center justify-center bg-black text-white'>
                    <span className='text-xl/none font-medium sm:text-base'>02</span>
                  </div>
                ) : (<div className='flex h-14 min-w-14 sm:h-12 sm:min-w-12 items-center justify-center bg-neutral-100'>
                  <span className='text-xl/none font-medium sm:text-base'>02</span>
                </div>)
              }

              <hr className='w-full border-neutral-200' />

              {
                currentStep === 2 ? (
                  <div className='flex h-14 min-w-14 sm:h-12 sm:min-w-12 items-center justify-center bg-black text-white'>
                    <span className='text-xl/none font-medium sm:text-base'>03</span>
                  </div>
                ) : (
                  <div className='flex h-14 min-w-14 sm:h-12 sm:min-w-12 items-center justify-center bg-neutral-100'>
                    <span className='text-xl/none font-medium sm:text-base'>03</span>
                  </div>
                )
              }
            </div>

            {/* Bottom */}
            <div className='flex w-full items-center justify-between'>
              <span className='w-[120px] text-left sm:text-sm'>Contato</span>
              <span className='w-[120px] text-center sm:text-sm'>Negócio</span>
              <span className='w-[120px] text-right sm:text-sm'>Projeto</span>
            </div>
          </nav>

          {/* Form */}
          <form
            className='flex flex-col gap-16'
            action='submit'
            onSubmit={handleSubmit(processForm)}
          >
            {/* Contact Info */}
            {
              currentStep === 0 && (
                <div className='flex flex-col gap-8'>
                  <div className='flex w-full items-start gap-8 sm:flex-col'>
                    {/* Name */}
                    <div className='flex w-full flex-col gap-3'>
                      <label className='text-base font-medium' htmlFor='name'>
                        Nome
                      </label>
                      <input
                        className='h-14 w-full border border-neutral-200 px-4 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                        id='name'
                        {...register('name')}
                        type='text'
                        placeholder='Qual seu nome completo?'
                      />
                    </div>

                    {/* Email */}
                    <div className='flex w-full flex-col gap-3'>
                      <label className='text-base font-medium' htmlFor='email'>
                        E-mail?
                      </label>
                      <input
                        className='h-14 w-full border border-neutral-200 px-4 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                        id='email'
                        {...register('email')}
                        type='email'
                        placeholder='Digite o seu melhor e-mail'
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className='flex flex-col gap-3'>
                    <label
                      className='text-base font-medium'
                      htmlFor='phone-number'
                    >
                      Telefone
                    </label>
                    <input
                      className='h-14 w-full border border-neutral-200 px-4 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='phone-number'
                      {...register('phone')}
                      type='text'
                      placeholder='Seu número com DDD'
                    />
                  </div>

                  {/* Position */}
                  <div className='flex flex-col gap-3'>
                    <label
                      className='text-base font-medium'
                      htmlFor='position'
                    >
                      Qual sua função na empresa?
                    </label>
                    <input
                      className='h-14 w-full border border-neutral-200 px-4 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='position'
                      {...register('position')}
                      type='text'
                      placeholder='Ex: Gerente de marketing'
                    />
                  </div>
                </div>
              )
            }

            {/* Business */}
            {
              currentStep === 1 && (
                <div className='flex flex-col gap-8'>
                  <div className='flex w-full items-start gap-8 sm:flex-col'>
                    {/* Business Name */}
                    <div className='flex w-full flex-col gap-3'>
                      <label
                        className='text-base font-medium'
                        htmlFor='business-name'
                      >
                        Qual o nome da empresa?
                      </label>
                      <input
                        className='h-14 w-full border border-neutral-200 px-4 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                        id='business-name'
                        {...register('businessName')}
                        type='text'
                        placeholder='Nome da marca'
                      />
                    </div>

                    {/* UF */}
                    <div className='flex w-full flex-col gap-3'>
                      <label className='text-base font-medium' htmlFor='uf'>
                        Qual sua cidade e estado?
                      </label>
                      <input
                        className='h-14 w-full border border-neutral-200 px-4 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                        id='uf'
                        {...register('uf')}
                        type='text'
                        placeholder='De onde você é?'
                      />
                    </div>
                  </div>

                  {/* Business About */}
                  <div className='flex flex-col gap-3'>
                    <label
                      className='text-base font-medium'
                      htmlFor='about-business'
                    >
                      Sobre o negócio
                    </label>
                    <input
                      className='h-14 w-full border border-neutral-200 px-4 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='about-business'
                      {...register('aboutBusiness')}
                      type='text'
                      placeholder='Qual a área de atuação da empresa?'
                    />
                  </div>

                  {/* Links */}
                  <div className='flex flex-col gap-3'>
                    <label className='text-base font-medium' htmlFor='links'>
                      Site, Facebook e/ou Instagram da empresa (se houver)
                    </label>
                    <input
                      className='h-14 w-full border border-neutral-200 px-4 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='links'
                      {...register('links')}
                      type='text'
                      placeholder='Digite o link e/ou nome aqui'
                    />
                  </div>
                </div>
              )
            }

            {/* Project */}
            {
              currentStep === 2 && (
                <div className='flex flex-col gap-8'>
                  {/* Time */}
                  <div className='flex w-full flex-col gap-5'>
                    <span className='text-base font-medium'>
                      Quando esse projeto precisa ser finalizado?
                    </span>

                    {/* Radio Buttons */}
                    <div className='flex flex-col gap-5'>
                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='end-date'
                      >
                        <input
                          className=''
                          id='end-date'
                          {...register('endDate')}
                          type='radio'
                          value='5 ou + meses'
                        />
                        5 ou + meses
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='end-date'
                      >
                        <input
                          className=''
                          id='end-date'
                          {...register('endDate')}
                          type='radio'
                          value='4 meses'
                        />
                        4 meses
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='end-date'
                      >
                        <input
                          className=''
                          id='end-date'
                          {...register('endDate')}
                          type='radio'
                          value='3 meses'
                        />
                        3 meses
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='end-date'
                      >
                        <input
                          className=''
                          id='end-date'
                          {...register('endDate')}
                          type='radio'
                          value='2 meses'
                        />
                        2 meses
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='end-date'
                      >
                        <input
                          className=''
                          id='end-date'
                          {...register('endDate')}
                          type='radio'
                          value='1 mês'
                        />
                        1 mês
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='end-date'
                      >
                        <input
                          className=''
                          id='end-date'
                          {...register('endDate')}
                          type='radio'
                          value='Sem pressa'
                        />
                        Sem pressa
                      </label>
                    </div>
                  </div>

                  {/* End date */}
                  <div className='flex flex-col gap-3'>
                    <label
                      className='text-base font-medium'
                      htmlFor='end-date-info'
                    >
                      Existe uma razão específica para essa data final?
                    </label>
                    <textarea
                      className='h-32 w-full border border-neutral-200 px-4 py-3 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='end-date-info'
                      {...register('endDateDesc')}
                      placeholder='Resposta'
                    />
                  </div>

                  {/* Who important? */}
                  <div className='flex flex-col gap-3'>
                    <label
                      className='text-base font-medium'
                      htmlFor='projectImportant'
                    >
                      Porque esse projeto é importante pra você?
                    </label>
                    <textarea
                      className='h-32 w-full border border-neutral-200 px-4 py-3 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='important'
                      {...register('projectImportant')}
                      placeholder='Resposta'
                    />
                  </div>

                  {/* Idea for project */}
                  <div className='flex flex-col gap-3'>
                    <label className='text-base font-medium' htmlFor='projectSuccess'>
                      Qual sua ideia de sucesso para esse projeto?
                    </label>
                    <textarea
                      className='h-32 w-full border border-neutral-200 px-4 py-3 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='projectSuccess'
                      {...register('projectSuccess')}
                      placeholder='Resposta'
                    />
                  </div>

                  {/* Category */}
                  <div className='flex w-full flex-col gap-5'>
                    <span className='text-base font-medium'>
                      Qual é a categoria do negócio?
                    </span>

                    {/* Radio Buttons */}
                    <div className='flex flex-col gap-5'>
                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='businessCategory'
                      >
                        <input
                          className=''
                          id='businessCategory'
                          {...register('businessCategory')}
                          type='radio'
                          value='Profissional liberal'
                        />
                        Profissional liberal
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='businessCategory'
                      >
                        <input
                          className=''
                          id='businessCategory'
                          {...register('businessCategory')}
                          type='radio'
                          value='Micro (2-10 funcionários)'
                        />
                        Micro (2-10 funcionários)
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='businessCategory'
                      >
                        <input
                          className=''
                          id='businessCategory'
                          {...register('businessCategory')}
                          type='radio'
                          value='Pequena (10-50 funcionários)'
                        />
                        Pequena (10-50 funcionários)
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='businessCategory'
                      >
                        <input
                          className=''
                          id='businessCategory'
                          {...register('businessCategory')}
                          type='radio'
                          value='Média (50-100 funcionários)'
                        />
                        Média (50-100 funcionários)
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='businessCategory'
                      >
                        <input
                          className=''
                          id='businessCategory'
                          {...register('businessCategory')}
                          type='radio'
                          value='Grande (Mais de 100 funcionários)'
                        />
                        Grande (Mais de 100 funcionários)
                      </label>
                    </div>
                  </div>

                  {/* Products n/ Services */}
                  <div className='flex flex-col gap-3'>
                    <label
                      className='text-base font-medium'
                      htmlFor='products-and-services'
                    >
                      Quais são os produtos e/ou serviços oferecidos?
                    </label>
                    <textarea
                      className='h-32 w-full border border-neutral-200 px-4 py-3 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='products-and-services'
                      {...register('productsAndServices')}
                      placeholder='Resposta'
                    />
                  </div>

                  {/*  */}
                  <div className='flex flex-col gap-3'>
                    <label
                      className='text-base font-medium'
                      htmlFor='whyMe'
                    >
                      Por que está me procurando agora para esse projeto?
                    </label>
                    <textarea
                      className='h-32 w-full border border-neutral-200 px-4 py-3 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='whyMe'
                      {...register('whyMe')}
                      placeholder='Resposta'
                    />
                  </div>

                  {/* How you found me? */}
                  <div className='flex w-full flex-col gap-5'>
                    <span className='text-base font-medium'>
                      Como me encontrou?
                    </span>

                    {/* Radio Buttons */}
                    <div className='flex flex-col gap-5'>
                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='how-you-found-me'
                      >
                        <input
                          className=''
                          id='how-you-found-me'
                          {...register('howFoundMe')}
                          type='radio'
                          value='site'
                        />
                        Site
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='how-you-found-me'
                      >
                        <input
                          className=''
                          id='how-you-found-me'
                          {...register('howFoundMe')}
                          type='radio'
                          value='instagram'
                        />
                        Instagram
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='how-you-found-me'
                      >
                        <input
                          className=''
                          id='how-you-found-me'
                          {...register('howFoundMe')}
                          type='radio'
                          value='facebook'
                        />
                        Facebook
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='how-you-found-me'
                      >
                        <input
                          className=''
                          id='how-you-found-me'
                          {...register('howFoundMe')}
                          type='radio'
                          value='linkedin'
                        />
                        LinkedIn
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='how-you-found-me'
                      >
                        <input
                          className=''
                          id='how-you-found-me'
                          {...register('howFoundMe')}
                          type='radio'
                          value='behance'
                        />
                        Behance
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='how-you-found-me'
                      >
                        <input
                          className=''
                          id='how-you-found-me'
                          {...register('howFoundMe')}
                          type='radio'
                          value='indicação'
                        />
                        Indicação
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='how-you-found-me'
                      >
                        <input
                          className=''
                          id='how-you-found-me'
                          {...register('howFoundMe')}
                          type='radio'
                          value='google'
                        />
                        Google
                      </label>

                      <label
                        className='flex items-center gap-2 text-base/none font-medium'
                        htmlFor='how-you-found-me'
                      >
                        <input
                          className=''
                          id='how-you-found-me'
                          {...register('howFoundMe')}
                          type='radio'
                          value='outro'
                        />
                        Outro
                      </label>
                    </div>
                  </div>

                  {/* Additional info */}
                  <div className='flex flex-col gap-3'>
                    <label
                      className='text-base font-medium'
                      htmlFor='more-info'
                    >
                      Fique a vontade para contribuir com outras informações
                    </label>
                    <textarea
                      className='h-32 w-full border border-neutral-200 px-4 py-3 text-black transition-all duration-300 ease-in-out placeholder:text-neutral-400 hover:border-black focus:outline-none'
                      id='more-info'
                      {...register('moreInfos')}
                      placeholder='Resposta'
                    />
                  </div>
                </div>
              )
            }

            {/* Buttons */}
            <div className='flex items-center justify-end gap-3'>
              {/* Prev */}
              {
                currentStep !== 0 && (
                  <button
                    className='flex h-14 items-center justify-center border border-neutral-200 px-12 transition-all duration-300 ease-in-out hover:border-black font-medium sm:w-full'
                    type='button'
                    onClick={prev}
                  >
                    Voltar
                  </button>
                )
              }

              {/* Next */}
              {
                currentStep !== 2 && (
                  <button
                    className='flex h-14 items-center justify-center bg-black px-12 text-white transition-all duration-300 ease-in-out hover:bg-neutral-800 font-medium sm:w-full'
                    type='button'
                    onClick={next}
                  >
                    Continuar
                  </button>
                )
              }

              {/* Sent */}
              {
                currentStep === 2 && (
                  <button
                    className='flex h-14 items-center justify-center bg-black px-12 text-white transition-all duration-300 ease-in-out hover:bg-neutral-800 font-medium sm:w-full'
                    type='submit'
                  >
                    Enviar
                  </button>
                )
              }
            </div>
          </form>
        </div>
      </article>
    </section>
  )
}
