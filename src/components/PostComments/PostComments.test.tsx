import { render, screen, fireEvent } from '@testing-library/react'
import PostComments from '.'

describe('PostComments', () => {
    it('deve permitir a inserção de dois comentários', () => {
    render(<PostComments />)

    const textarea = screen.getByTestId('campo-comentario')
    const botao = screen.getByTestId('botao-comentar')

    // Primeiro comentário
    fireEvent.change(textarea, {
        target: { value: 'Primeiro comentário' }
    })
    fireEvent.click(botao)

    // Segundo comentário
    fireEvent.change(textarea, {
        target: { value: 'Segundo comentário' }
    })
    fireEvent.click(botao)

    expect(
        screen.getByText('Primeiro comentário')
    ).toBeInTheDocument()

    expect(
        screen.getByText('Segundo comentário')
    ).toBeInTheDocument()

    const comentarios = screen.getAllByTestId('comentario')
    expect(comentarios.length).toBe(2)
    })
})