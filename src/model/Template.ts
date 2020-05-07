import { ElementType, EmberElement } from './EmberElement'
import { Parameter } from './Parameter'
import { Matrix } from './Matrix'
import { EmberFunction } from './EmberFunction'
import { EmberNode } from './EmberNode'
import { EmberTreeNode } from '../types/types'

export { Template, TemplateImpl }

/**
 *  Common set of parameters, attributes and sub-trees that can be referred to
 *  by other elements.
 */
interface Template extends EmberElement {
	type: ElementType.Template
	/** Templated properties. */
	element?: EmberTreeNode<Parameter | EmberNode | Matrix | EmberFunction>
	/** Details of the template. */
	description?: string
}

class TemplateImpl implements Template {
	public readonly type: ElementType.Template = ElementType.Template
	constructor (
		public number: number,
		public element?: EmberTreeNode<Parameter | EmberNode | Matrix | EmberFunction>,
		public description?: string
	) { }
}